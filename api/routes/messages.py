from __future__ import annotations

from typing import List

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_

from db.database import get_db
from db.models import Message, User
from api.auth import get_current_user

router = APIRouter(prefix="/api/messages", tags=["messages"])


class MessageCreate(BaseModel):
    receiver_id: int
    content: str


class MessageResponse(BaseModel):
    id: int
    sender_id: int
    sender_name: str = ""
    receiver_id: int
    content: str
    is_read: bool
    created_at: str

    model_config = {"from_attributes": True}


class ConversationPreview(BaseModel):
    user_id: int
    user_name: str
    last_message: str
    unread_count: int
    last_time: str


@router.post("", response_model=MessageResponse, status_code=201)
def send_message(data: MessageCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    if data.receiver_id == user.id:
        raise HTTPException(400, "Kendinize mesaj atamazsiniz")

    receiver = db.query(User).get(data.receiver_id)
    if not receiver:
        raise HTTPException(404, "Alici bulunamadi")

    msg = Message(
        sender_id=user.id,
        receiver_id=data.receiver_id,
        content=data.content,
    )
    db.add(msg)
    db.commit()
    db.refresh(msg)

    return MessageResponse(
        id=msg.id,
        sender_id=msg.sender_id,
        sender_name=user.full_name,
        receiver_id=msg.receiver_id,
        content=msg.content,
        is_read=msg.is_read,
        created_at=msg.created_at.isoformat(),
    )


@router.get("/conversations", response_model=List[ConversationPreview])
def get_conversations(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    # Tum mesajlari al
    messages = db.query(Message).filter(
        or_(Message.sender_id == user.id, Message.receiver_id == user.id)
    ).order_by(Message.created_at.desc()).all()

    convos: dict[int, ConversationPreview] = {}
    for msg in messages:
        other_id = msg.receiver_id if msg.sender_id == user.id else msg.sender_id
        if other_id not in convos:
            other_user = db.query(User).get(other_id)
            unread = db.query(Message).filter(
                Message.sender_id == other_id,
                Message.receiver_id == user.id,
                Message.is_read == False,
            ).count()
            convos[other_id] = ConversationPreview(
                user_id=other_id,
                user_name=other_user.full_name if other_user else "?",
                last_message=msg.content[:100],
                unread_count=unread,
                last_time=msg.created_at.isoformat(),
            )

    return list(convos.values())


@router.get("/{other_user_id}", response_model=List[MessageResponse])
def get_chat(other_user_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    messages = db.query(Message).filter(
        or_(
            and_(Message.sender_id == user.id, Message.receiver_id == other_user_id),
            and_(Message.sender_id == other_user_id, Message.receiver_id == user.id),
        )
    ).order_by(Message.created_at.asc()).all()

    # Okunmamislari okundu yap
    for msg in messages:
        if msg.receiver_id == user.id and not msg.is_read:
            msg.is_read = True
    db.commit()

    return [
        MessageResponse(
            id=m.id,
            sender_id=m.sender_id,
            sender_name=m.sender.full_name if m.sender else "",
            receiver_id=m.receiver_id,
            content=m.content,
            is_read=m.is_read,
            created_at=m.created_at.isoformat(),
        )
        for m in messages
    ]
