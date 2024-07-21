import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapSalon = () => {
  const position = [53.908313, 9.483062]; // Update with your actual salon coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-[400px] md:h-full" // Ensure the map container fills the available space
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Mardin FriseurSalon <br /> lübscherkamp 2-6, 25524 Itzehoe
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSalon;
