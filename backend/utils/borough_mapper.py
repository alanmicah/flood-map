def map_to_borough(item):
    # TODO: replace with GeoJSON spatial lookup
    area_name = item.get("floodArea", {}).get("label", "")

    if "Thames" in area_name:
        return "Westminster"

    return None