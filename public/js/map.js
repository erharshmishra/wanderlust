window.addEventListener("DOMContentLoaded", () => {
  // Default to New Delhi
  let lat = 28.6139;
  let lng = 77.209;
  let label = "New Delhi";

  // Use listing coordinates if available
  if (coordinates && coordinates.length === 2) {
    [lng, lat] = coordinates; // GeoJSON [lng, lat] → Leaflet [lat, lng]
    if (locationLabel) label = locationLabel;
  }

  // Initialize map
  const map = L.map("map").setView([lat, lng], 12);

  // OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Add marker
  L.marker([lat, lng]).addTo(map).bindPopup(`<b>${label}</b>`).openPopup();
});
