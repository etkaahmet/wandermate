from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from db.database import engine, Base
from api.routes import auth, trips, messages, reviews

# Tablolari olustur
Base.metadata.create_all(bind=engine)

app = FastAPI(title="WanderMate", version="1.0.0")

# API routes
app.include_router(auth.router)
app.include_router(trips.router)
app.include_router(messages.router)
app.include_router(reviews.router)

# Static dosyalar
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def index():
    return FileResponse("static/index.html")
