import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ position }) {
  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "21.5rem", width: "100%", borderRadius: "1rem" }}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Latitude: {position[0]}, Longitude: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
