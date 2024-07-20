import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

import marker from "../../Assets/icons/Location.svg";
import { Icon } from "leaflet";
const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [32, 32],
});

const MapSalon = () => {
  const position = [53.908313, 9.483062]; // Update with your actual salon coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full" // Ensure the map container fills the available space
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          Mardin FriseurSalon <br /> lübscherkamp 2-6, 25524 Itzehoe
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSalon;
