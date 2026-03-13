from __future__ import annotations

from datetime import datetime
from typing import Optional, List

from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel
from sqlalchemy.orm import Session, joinedload

from db.database import get_db
from db.models import Trip, TripMatch, User
from api.auth import get_current_user

router = APIRouter(prefix="/api/trips", tags=["trips"])


class TripCreate(BaseModel):
    destination_country: str
    destination_city: str
    arrival_date: str       # YYYY-MM-DD
    departure_date: str
    description: str = ""
    interests: str = ""


class TripResponse(BaseModel):
    id: int
    traveler_id: int
    traveler_name: str = ""
    traveler_country: str = ""
    traveler_languages: str = ""
    destination_country: str
    destination_city: str
    arrival_date: datetime
    departure_date: datetime
    description: str
    interests: str
    status: str
    match_count: int = 0
    created_at: datetime


class MatchCreate(BaseModel):
    message: str = ""


class MatchResponse(BaseModel):
    id: int
    trip_id: int
    host_id: int
    host_name: str = ""
    host_city: str = ""
    host_rating: float = 0.0
    host_languages: str = ""
    message: str
    status: str
    created_at: datetime


@router.post("", response_model=TripResponse, status_code=201)
def create_trip(data: TripCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    trip = Trip(
        traveler_id=user.id,
        destination_country=data.destination_country,
        destination_city=data.destination_city,
        arrival_date=datetime.strptime(data.arrival_date, "%Y-%m-%d"),
        departure_date=datetime.strptime(data.departure_date, "%Y-%m-%d"),
        description=data.description,
        interests=data.interests,
    )
    db.add(trip)
    db.commit()
    db.refresh(trip)
    return _trip_response(trip)


@router.get("", response_model=List[TripResponse])
def list_trips(
    country: str = "",
    city: str = "",
    status: str = "open",
    db: Session = Depends(get_db),
):
    query = db.query(Trip).options(joinedload(Trip.traveler), joinedload(Trip.matches))

    if country:
        query = query.filter(Trip.destination_country.ilike(f"%{country}%"))
    if city:
        query = query.filter(Trip.destination_city.ilike(f"%{city}%"))
    if status:
        query = query.filter(Trip.status == status)

    trips = query.order_by(Trip.arrival_date.asc()).all()
    return [_trip_response(t) for t in trips]


@router.get("/{trip_id}", response_model=TripResponse)
def get_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = db.query(Trip).options(joinedload(Trip.traveler), joinedload(Trip.matches)).get(trip_id)
    if not trip:
        raise HTTPException(404, "Gezi bulunamadi")
    return _trip_response(trip)


@router.get("/my/list", response_model=List[TripResponse])
def my_trips(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    trips = db.query(Trip).filter_by(traveler_id=user.id).order_by(Trip.created_at.desc()).all()
    return [_trip_response(t) for t in trips]


# --- Eslesme ---
@router.post("/{trip_id}/match", response_model=MatchResponse, status_code=201)
def apply_as_host(trip_id: int, data: MatchCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    trip = db.query(Trip).get(trip_id)
    if not trip:
        raise HTTPException(404, "Gezi bulunamadi")
    if trip.traveler_id == user.id:
        raise HTTPException(400, "Kendi gezinize basvuramazsiniz")

    existing = db.query(TripMatch).filter_by(trip_id=trip_id, host_id=user.id).first()
    if existing:
        raise HTTPException(400, "Zaten basvurdunuz")

    match = TripMatch(
        trip_id=trip_id,
        host_id=user.id,
        message=data.message,
    )
    db.add(match)
    db.commit()
    db.refresh(match)
    return _match_response(match)


@router.get("/{trip_id}/matches", response_model=List[MatchResponse])
def get_matches(trip_id: int, db: Session = Depends(get_db)):
    matches = db.query(TripMatch).filter_by(trip_id=trip_id).options(joinedload(TripMatch.host)).all()
    return [_match_response(m) for m in matches]


@router.patch("/matches/{match_id}/accept")
def accept_match(match_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    match = db.query(TripMatch).options(joinedload(TripMatch.trip)).get(match_id)
    if not match:
        raise HTTPException(404, "Eslesme bulunamadi")
    if match.trip.traveler_id != user.id:
        raise HTTPException(403, "Bu islem icin yetkiniz yok")

    match.status = "accepted"
    match.trip.status = "matched"
    db.commit()
    return {"ok": True, "message": "Eslesme kabul edildi"}


@router.patch("/matches/{match_id}/reject")
def reject_match(match_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    match = db.query(TripMatch).options(joinedload(TripMatch.trip)).get(match_id)
    if not match:
        raise HTTPException(404, "Eslesme bulunamadi")
    if match.trip.traveler_id != user.id:
        raise HTTPException(403, "Bu islem icin yetkiniz yok")

    match.status = "rejected"
    db.commit()
    return {"ok": True, "message": "Eslesme reddedildi"}


def _trip_response(trip: Trip) -> TripResponse:
    return TripResponse(
        id=trip.id,
        traveler_id=trip.traveler_id,
        traveler_name=trip.traveler.full_name if trip.traveler else "",
        traveler_country=trip.traveler.country if trip.traveler else "",
        traveler_languages=trip.traveler.languages if trip.traveler else "",
        destination_country=trip.destination_country,
        destination_city=trip.destination_city,
        arrival_date=trip.arrival_date,
        departure_date=trip.departure_date,
        description=trip.description,
        interests=trip.interests,
        status=trip.status,
        match_count=len(trip.matches) if trip.matches else 0,
        created_at=trip.created_at,
    )


def _match_response(match: TripMatch) -> MatchResponse:
    return MatchResponse(
        id=match.id,
        trip_id=match.trip_id,
        host_id=match.host_id,
        host_name=match.host.full_name if match.host else "",
        host_city=match.host.city if match.host else "",
        host_rating=match.host.rating if match.host else 0.0,
        host_languages=match.host.languages if match.host else "",
        message=match.message,
        status=match.status,
        created_at=match.created_at,
    )
