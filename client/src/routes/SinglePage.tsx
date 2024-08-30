import { singlePostData, userData } from "../lib/dummyData";

import ImageSlider from "../components/ImageSlider";
import { MapPinSimple } from "@phosphor-icons/react";

const SinglePage = () => {
  const data = singlePostData;

  return (
    <div className="flex h-full">
      <div className="flex-3">
        <div className="pr-12">
          <ImageSlider images={data.images} />

          <div className="mt-12">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold text-[#444]">
                  {data.title}
                </h1>

                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <MapPinSimple size={16} />
                  <span>{data.address}</span>
                </div>

                <div className="text-xl font-light p-1 rounded-md bg-amber-200 w-max">
                  € {data.price}
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center p-6 rounded-md bg-amber-100 ">
                <img
                  src={userData.img}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="mt-12 text-neutral-500 leading-5">
              {data.description}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-2">
        <div className="px-5"></div>
      </div>
    </div>
  );
};

export default SinglePage;
