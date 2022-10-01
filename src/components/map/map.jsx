import React from "react";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
const map = () => {
  const homeposition = [-34.404, 150.892162];
  const universityposition = [-34.407252, 150.878468];

  return (
    <MapContainer
      className="map"
      center={homeposition}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={homeposition}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>
          Home: 8 WoodHill Street, <br /> Fairy Meadow, 2519
        </Popup>
      </Marker>
      <Marker
        position={universityposition}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>University of Wollongong</Popup>
      </Marker>
    </MapContainer>
  );
};

export default map;
