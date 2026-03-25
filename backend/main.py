from fastapi import FastAPI
from app.routes import floods

app = FastAPI(title="London Flood Monitor API")

app.include_router(floods.router, prefix="/api/floods")

@app.get("/")
async def root():
    return {"status": "ok"}