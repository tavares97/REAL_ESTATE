import {
  Bathtub,
  Bed,
  BookmarksSimple,
  Chat,
  MapPinSimple,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import { Post } from "@/types/types";

type ListCardProps = {
  listItem: Post;
};

const ListCard = ({ listItem }: ListCardProps) => {
  return (
    <div className="flex gap-5 sm:flex-col">
      <Link to={`/list/${listItem.id}`} className="flex-2 h-48 ">
        <img
          src={listItem.images[0]}
          alt="house"
          className=" w-full h-full object-cover rounded-md"
        />
      </Link>
      <div className="flex-3 flex flex-col justify-between gap-2">
        <h2 className="text-xl font-semibold text-[#444] transition ease-in-out hover:text-[#000] duration-300 hover:scale-[1.02]">
          <Link to={`/list/${listItem.id}`}>{listItem.title}</Link>
        </h2>

        <p className="flex text-sm items-center gap-1 text-slate-400">
          <MapPinSimple size={16} />
          <span>{listItem.address}</span>
        </p>

        <p className="text-xl font-light p-1 rounded-md bg-amber-200 w-max">
          € {listItem.price}
        </p>

        <div className="flex justify-between gap-2">
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md">
              <Bed size={16} />
              {listItem.bedroom} <span> Bedroom</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md">
              <Bathtub size={16} />
              {listItem.bathroom}
              <span> Bathroom</span>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="border border-slate-300 p-1 rounded-md cursor-pointer hover:bg-slate-100">
              <BookmarksSimple size={16} />
            </div>
            <div className="border border-slate-300 p-1 rounded-md cursor-pointer  hover:bg-slate-100">
              <Chat size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
