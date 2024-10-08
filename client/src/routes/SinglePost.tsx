import {
  Bathtub,
  Bed,
  BookmarkSimple,
  Bus,
  ForkKnife,
  FrameCorners,
  GraduationCap,
  HandCoins,
  MapPinSimple,
  PawPrint,
  Toolbox,
} from "@phosphor-icons/react";
import { useLoaderData, useNavigate } from "react-router-dom";

import ImageSlider from "../components/ImageSlider";
import Map from "../components/Map";
import { Post } from "@/types/types";
import apiRequest from "@/lib/apiRequest";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

const SinglePost = () => {
  const { post, isSaved } = useLoaderData() as { post: Post; isSaved: boolean };
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [saved, setIsSaved] = useState(isSaved);

  const handleSavePost = async () => {
    setIsSaved(!saved);
    if (!user) {
      navigate("/login");
    }

    try {
      await apiRequest.post("/post/save", { postId: post.id });
    } catch (error) {
      console.log(error);
      setIsSaved(!saved);
    }
  };

  return (
    <div className="flex h-full md:flex-col md:overflow-scroll sm:flex-col sm:overflow-auto">
      <div className="flex-3  overflow-y-scroll pb-5 z-20 h-full md:flex-none md:h-max md:mb-8 sm:flex-none sm:h-max sm:mb-8 ">
        <div className="pr-12 sm:pr-0 ">
          <ImageSlider images={post.images} />

          <div className="mt-12">
            <div className="flex justify-between sm:flex-col sm:gap-2 ">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold text-[#444]">
                  {post.title}
                </h1>

                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <MapPinSimple size={16} />
                  <span>{post.address}</span>
                </div>

                <div className="text-xl font-light p-1 rounded-md bg-amber-200 w-max">
                  € {post.price}
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center p-6 rounded-md bg-amber-100 sm:p-3 ">
                <img
                  src={post.user.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>{post.user.username}</span>
              </div>
            </div>

            <div className="mt-12 text-neutral-500 leading-5">
              {post.PostDetail.description}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-2 bg-[#fcf5f3] overflow-y-scroll pb-5 z-10 h-full md:flex-none md:h-max sm:flex-none sm:h-max sm:bg-white md:bg-white">
        <div className="px-5 flex flex-col gap-3 ">
          <p className="text-lg font-bold mb-2">General</p>
          <div className="flex flex-col gap-5 py-3 px-2 bg-white rounded-md">
            <div className="flex items-center gap-2">
              <Toolbox size={24} />
              <div>
                <span className="font-bold">Utilities</span>
                <p className="text-sm">{post.PostDetail.utilities}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PawPrint size={24} />
              <div>
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">{post.PostDetail.pet}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HandCoins size={24} />
              <div>
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">{post.PostDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="text-lg font-bold mb-2">Room Sizes</p>
          <div className="flex justify-between lg:text-xs sm:flex-col">
            <div className="flex items-center gap-2 bg-white p-2 rounded-md">
              <FrameCorners size={24} />
              <span>{post.PostDetail.size} sqft</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-md">
              <Bed size={24} />
              <span>{post.bedroom} bed</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-md">
              <Bathtub size={24} />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="text-lg font-bold mb-2">Nearby Places</p>
          <div className="flex justify-between gap-5 py-3 px-2 bg-white rounded-md sm:flex-col ">
            <div className="flex items-center gap-2">
              <GraduationCap size={24} />
              <div>
                <span className="font-bold ">School</span>
                <p className="text-sm">{post.PostDetail.school}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bus size={24} />
              <div>
                <span className="font-bold ">Bus stop</span>
                <p className="text-sm">{post.PostDetail.bus}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ForkKnife size={24} />
              <div>
                <span className="font-bold">Restaurant</span>
                <p className="text-sm">{post.PostDetail.restaurant}</p>
              </div>
            </div>
          </div>

          <p className="text-lg font-bold mb-2">Location</p>
          <div className="w-full h-44 ">
            <Map pins={[post]} />
          </div>

          <div className="flex justify-between mt-2 ">
            <button
              className="p-2 flex items-center gap-2 bg-white rounded-md border cursor-pointer  hover:bg-amber-100 sm:bg-amber-200"
              onClick={handleSavePost}
            >
              <BookmarkSimple
                size={24}
                weight={saved ? "fill" : "regular"}
                color={saved ? "green" : "black"}
              />
              <span className="sm:hidden">
                {saved ? "Place Saved" : "Save Place"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
