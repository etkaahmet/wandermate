from datetime import datetime

from sqlalchemy import (
    Boolean, Column, DateTime, Float, ForeignKey, Integer, String, Text
)
from sqlalchemy.orm import relationship

from db.database import Base



class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(200), unique=True, nullable=False, index=True)
    password_hash = Column(String(200), nullable=False)
    full_name = Column(String(100), nullable=False)
    bio = Column(Text, default="")
    avatar_url = Column(String(500), default="")

    # Konum
    country = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False)

    # Profil
    interests = Column(Text, default="")           # virgul ayrimli: "tarih,yemek,dogal"
    languages = Column(Text, default="")           # virgul ayrimli: "Turkce,Ingilizce"
    is_host = Column(Boolean, default=False)        # gonullu rehber mi?
    host_description = Column(Text, default="")     # "Nigde'yi gezdiririm, Kapadokya yakin"

    # Istatistik
    rating = Column(Float, default=0.0)
    trips_count = Column(Integer, default=0)
    hosted_count = Column(Integer, default=0)

    # Email dogrulama
    email_verified = Column(Boolean, default=False)
    verification_code = Column(String(6), default="")

    # Rozetler
    verified = Column(Boolean, default=False)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    trips = relationship("Trip", back_populates="traveler", foreign_keys="Trip.traveler_id")
    reviews_received = relationship("Review", back_populates="reviewed_user", foreign_keys="Review.reviewed_id")


class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, autoincrement=True)
    traveler_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    destination_country = Column(String(100), nullable=False)
    destination_city = Column(String(100), nullable=False)
    arrival_date = Column(DateTime, nullable=False)
    departure_date = Column(DateTime, nullable=False)
    description = Column(Text, default="")          # "Nigde'ye geliyorum, birisi gezdirsin"
    interests = Column(Text, default="")             # "tarih,yemek"
    status = Column(String(20), default="open")      # open, matched, completed, cancelled

    created_at = Column(DateTime, default=datetime.utcnow)

    traveler = relationship("User", back_populates="trips", foreign_keys=[traveler_id])
    matches = relationship("TripMatch", back_populates="trip")


class TripMatch(Base):
    __tablename__ = "trip_matches"

    id = Column(Integer, primary_key=True, autoincrement=True)
    trip_id = Column(Integer, ForeignKey("trips.id"), nullable=False)
    host_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    message = Column(Text, default="")               # "Hosgeldin, seni gezdiririm!"
    status = Column(String(20), default="pending")    # pending, accepted, rejected

    created_at = Column(DateTime, default=datetime.utcnow)

    trip = relationship("Trip", back_populates="matches")
    host = relationship("User")


class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, autoincrement=True)
    sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    receiver_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    sender = relationship("User", foreign_keys=[sender_id])
    receiver = relationship("User", foreign_keys=[receiver_id])


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, autoincrement=True)
    reviewer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    reviewed_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    trip_id = Column(Integer, ForeignKey("trips.id"), nullable=False)

    rating = Column(Integer, nullable=False)          # 1-5
    comment = Column(Text, default="")
    created_at = Column(DateTime, default=datetime.utcnow)

    reviewer = relationship("User", foreign_keys=[reviewer_id])
    reviewed_user = relationship("User", back_populates="reviews_received", foreign_keys=[reviewed_id])
