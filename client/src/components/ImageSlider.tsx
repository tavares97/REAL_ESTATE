import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react";

import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  console.log(images.length);

  const changeImage = (direction: number) => {
    if (imageIndex !== null) {
      setImageIndex(
        (prevIndex) => (prevIndex! + direction + images.length) % images.length
      );
    }
  };

  return (
    <div className="flex w-full h-80 gap-5">
      {imageIndex !== null && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-90 flex justify-between items-center">
          <div className="flex-1 ml-3 cursor-pointer">
            <ArrowLeft
              size={32}
              color="white"
              onClick={() => changeImage(-1)}
            />
          </div>
          <div className="p-10 w-full h-full object-cover flex items-center justify-center ">
            <img src={images[imageIndex]} alt="" className="rounded-md" />
          </div>
          <div className="flex-1 mr-3 cursor-pointer">
            <ArrowRight
              size={32}
              color="white"
              onClick={() => changeImage(1)}
            />
          </div>

          <div className="absolute top-0 right-0 p-3 cursor-pointer">
            <X size={32} color="white" onClick={() => setImageIndex(null)} />
          </div>
        </div>
      )}

      <div className="flex-3">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover rounded-md cursor-pointer"
          onClick={() => setImageIndex(0)}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-5">
        {images.slice(1).map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            className="w-full h-24 object-cover rounded-md cursor-pointer "
            onClick={() => setImageIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
