import httpx
from app.utils.borough_mapper import map_to_borough

FLOOD_API_URL = "https://environment.data.gov.uk/flood-monitoring/id/floods"

SEVERITY_MAP = {
    1: "severe",   # red
    2: "flooding", # red
    3: "warning",  # amber
    4: "alert",    # green
}

async def get_borough_flood_status():
    async with httpx.AsyncClient() as client:
        res = await client.get(FLOOD_API_URL)
        data = res.json()

    boroughs = {}

    for item in data.get("items", []):
        severity = item.get("severityLevel")
        description = item.get("description")

        borough = map_to_borough(item)

        if not borough:
            continue

        boroughs[borough] = {
            "severity": SEVERITY_MAP.get(severity, "unknown"),
            "description": description,
        }

    return boroughs