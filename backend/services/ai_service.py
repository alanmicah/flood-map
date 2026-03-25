import random

async def predict_flood_risk(borough: str):
    # placeholder AI logic (replace with ML model later)
    score = random.random()

    if score > 0.8:
        return "high"
    elif score > 0.5:
        return "medium"
    return "low"