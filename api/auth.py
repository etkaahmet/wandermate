from __future__ import annotations

import hashlib
import secrets
from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, Request
from sqlalchemy.orm import Session

from db.database import get_db
from db.models import User

# Basit token-based auth (JWT yerine, MVP icin yeterli)
_tokens: dict[str, int] = {}  # token -> user_id


def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    h = hashlib.sha256(f"{salt}:{password}".encode()).hexdigest()
    return f"{salt}:{h}"


def verify_password(password: str, password_hash: str) -> bool:
    salt, h = password_hash.split(":")
    return hashlib.sha256(f"{salt}:{password}".encode()).hexdigest() == h


def create_token(user_id: int) -> str:
    token = secrets.token_urlsafe(32)
    _tokens[token] = user_id
    return token


def get_current_user(request: Request, db: Session = Depends(get_db)) -> User:
    token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if not token or token not in _tokens:
        raise HTTPException(401, "Giris yapmaniz gerekiyor")
    user = db.query(User).get(_tokens[token])
    if not user:
        raise HTTPException(401, "Kullanici bulunamadi")
    return user


def optional_user(request: Request, db: Session = Depends(get_db)) -> Optional[User]:
    try:
        return get_current_user(request, db)
    except HTTPException:
        return None
