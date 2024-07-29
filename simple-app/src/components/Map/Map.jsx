import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ settings }) {
  return (
    <MapContainer
      center={settings.position}
      zoom={settings.zoom}
      style={settings.style}
      scrollWheelZoom={settings.scrollWheelZoom}
      dragging={settings.dragging}
      zoomControl={settings.zoomControl}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={settings.position}>
        <Popup>
          Latitude: {settings.position[0]}, Longitude: {settings.position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
