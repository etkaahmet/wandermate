from __future__ import annotations

from typing import List

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import func

from db.database import get_db
from db.models import Review, User, Trip, TripMatch
from api.auth import get_current_user

router = APIRouter(prefix="/api/reviews", tags=["reviews"])


class ReviewCreate(BaseModel):
    reviewed_id: int
    trip_id: int
    rating: int        # 1-5
    comment: str = ""


class ReviewResponse(BaseModel):
    id: int
    reviewer_id: int
    reviewer_name: str
    reviewed_id: int
    trip_id: int
    rating: int
    comment: str
    created_at: str


@router.post("", response_model=ReviewResponse, status_code=201)
def create_review(data: ReviewCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    if data.rating < 1 or data.rating > 5:
        raise HTTPException(400, "Puan 1-5 arasi olmali")
    if data.reviewed_id == user.id:
        raise HTTPException(400, "Kendinizi puanlayamazsiniz")

    existing = db.query(Review).filter_by(
        reviewer_id=user.id, reviewed_id=data.reviewed_id, trip_id=data.trip_id
    ).first()
    if existing:
        raise HTTPException(400, "Bu gezi icin zaten degerlendirme yaptiniz")

    review = Review(
        reviewer_id=user.id,
        reviewed_id=data.reviewed_id,
        trip_id=data.trip_id,
        rating=data.rating,
        comment=data.comment,
    )
    db.add(review)
    db.commit()

    # Ortalama puani guncelle
    avg = db.query(func.avg(Review.rating)).filter_by(reviewed_id=data.reviewed_id).scalar()
    reviewed_user = db.query(User).get(data.reviewed_id)
    if reviewed_user and avg:
        reviewed_user.rating = round(float(avg), 1)
        db.commit()

    db.refresh(review)
    return ReviewResponse(
        id=review.id,
        reviewer_id=review.reviewer_id,
        reviewer_name=user.full_name,
        reviewed_id=review.reviewed_id,
        trip_id=review.trip_id,
        rating=review.rating,
        comment=review.comment,
        created_at=review.created_at.isoformat(),
    )


@router.get("/user/{user_id}", response_model=List[ReviewResponse])
def get_user_reviews(user_id: int, db: Session = Depends(get_db)):
    reviews = db.query(Review).filter_by(reviewed_id=user_id).order_by(Review.created_at.desc()).all()
    return [
        ReviewResponse(
            id=r.id,
            reviewer_id=r.reviewer_id,
            reviewer_name=r.reviewer.full_name if r.reviewer else "",
            reviewed_id=r.reviewed_id,
            trip_id=r.trip_id,
            rating=r.rating,
            comment=r.comment,
            created_at=r.created_at.isoformat(),
        )
        for r in reviews
    ]
