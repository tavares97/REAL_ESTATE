import { Marker, Popup } from "react-leaflet";

import { Link } from "react-router-dom";
import { Post } from "../types/types";

interface PinProps {
  pin: Post;
}

const Pin = ({ pin }: PinProps) => {
  console.log(pin);
  return (
    <Marker position={[pin.latitude, pin.longitude]}>
      <Popup>
        <div className="flex gap-5 min-w-60">
          <img
            src="{pin.images[0]}"
            alt="house"
            className="w-16 h-12 object-cover rounded-md"
          />

          <div className="flex flex-col justify-between w-full">
            <Link to={`/list/${pin.id}`}>
              <span className="font-semibold text-slate-900"> {pin.title}</span>
            </Link>

            <div className="flex justify-between items-center ">
              <span className="text-slate-400">{pin.bedroom} bedroom</span>
              <b className="text-slate-800 bg-amber-300 p-1 pt-2 rounded-md items-center justify-center w-max">
                € {pin.price}
              </b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
