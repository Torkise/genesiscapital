export function get_area_id(name) {
    const areas = {"Technology": 1, "Energy": 2, "Healthcare": 3, "Sustainability": 4}
    return areas[name]
}