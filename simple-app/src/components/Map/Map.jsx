import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Map({ settings }) {
  const {
    position,
    style,
    zoom,
    zoomControl,
    doubleClickZoom,
    scrollWheelZoom,
    dragging,
  } = settings;

  return (
    <MapContainer
      center={position}
      style={style}
      zoom={zoom}
      zoomControl={zoomControl}
      doubleClickZoom={doubleClickZoom}
      scrollWheelZoom={scrollWheelZoom}
      dragging={dragging}
      className="map"
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
