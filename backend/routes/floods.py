from fastapi import APIRouter
from app.services.flood_service import get_borough_flood_status

router = APIRouter()

@router.get("/")
async def flood_status():
    return await get_borough_flood_status()