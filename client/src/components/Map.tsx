import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import { ListData } from "../lib/dummyData";
import Pin from "./Pin";

interface MapProps {
  pins: ListData[];
}

const Map = ({ pins }: MapProps) => {
  return (
    <MapContainer
      center={[38.88037632143223, -9.066868130050977]}
      zoom={11}
      scrollWheelZoom={false}
      className="w-full h-full rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((pin) => (
        <Pin pin={pin} key={pin.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
