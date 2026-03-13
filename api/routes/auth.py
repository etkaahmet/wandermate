from __future__ import annotations

import random

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from db.database import get_db
from db.models import User
from api.auth import hash_password, verify_password, create_token, get_current_user

router = APIRouter(prefix="/api/auth", tags=["auth"])


def _generate_code() -> str:
    return str(random.randint(100000, 999999))


class RegisterRequest(BaseModel):
    email: str
    password: str
    full_name: str
    country: str
    city: str
    languages: str = ""


class LoginRequest(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    bio: str
    avatar_url: str
    country: str
    city: str
    interests: str
    languages: str
    is_host: bool
    host_description: str
    rating: float
    trips_count: int
    hosted_count: int
    verified: bool

    model_config = {"from_attributes": True}


class VerifyRequest(BaseModel):
    email: str
    code: str


class OAuthRequest(BaseModel):
    provider: str       # "google" veya "apple"
    token: str          # provider'dan gelen id_token
    full_name: str = ""


@router.post("/register", response_model=dict)
def register(data: RegisterRequest, db: Session = Depends(get_db)):
    existing = db.query(User).filter_by(email=data.email.lower()).first()
    if existing:
        raise HTTPException(400, "Bu email zaten kayitli")

    code = _generate_code()
    user = User(
        email=data.email.lower(),
        password_hash=hash_password(data.password),
        full_name=data.full_name,
        country=data.country,
        city=data.city,
        languages=data.languages,
        email_verified=False,
        verification_code=code,
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    # MVP: kodu response'da donduruyoruz (prod'da email ile gonderilir)
    return {"needs_verification": True, "email": user.email, "code_hint": code}


@router.post("/verify", response_model=dict)
def verify_email(data: VerifyRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter_by(email=data.email.lower()).first()
    if not user:
        raise HTTPException(404, "Kullanici bulunamadi")
    if user.email_verified:
        raise HTTPException(400, "Email zaten dogrulanmis")
    if user.verification_code != data.code:
        raise HTTPException(400, "Dogrulama kodu hatali")

    user.email_verified = True
    user.verification_code = ""
    db.commit()
    db.refresh(user)

    token = create_token(user.id)
    return {"token": token, "user": UserResponse.model_validate(user).model_dump()}


@router.post("/resend-code", response_model=dict)
def resend_code(data: dict, db: Session = Depends(get_db)):
    email = data.get("email", "").lower()
    user = db.query(User).filter_by(email=email).first()
    if not user:
        raise HTTPException(404, "Kullanici bulunamadi")
    if user.email_verified:
        raise HTTPException(400, "Email zaten dogrulanmis")

    code = _generate_code()
    user.verification_code = code
    db.commit()
    # MVP: kodu response'da donduruyoruz
    return {"ok": True, "code_hint": code}


@router.post("/login", response_model=dict)
def login(data: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter_by(email=data.email.lower()).first()
    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(401, "Email veya sifre hatali")

    if not user.email_verified:
        code = _generate_code()
        user.verification_code = code
        db.commit()
        return {"needs_verification": True, "email": user.email, "code_hint": code}

    token = create_token(user.id)
    return {"token": token, "user": UserResponse.model_validate(user).model_dump()}


@router.get("/me", response_model=UserResponse)
def get_me(user: User = Depends(get_current_user)):
    return user


@router.put("/me", response_model=UserResponse)
def update_me(
    data: dict,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    allowed = {"full_name", "bio", "country", "city", "interests", "languages", "is_host", "host_description", "avatar_url"}
    for key, value in data.items():
        if key in allowed:
            setattr(user, key, value)
    db.commit()
    db.refresh(user)
    return user
