"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Viewer from "./view";

export default function Images({ response, title }) {
  const storage = process.env.NEXT_PUBLIC_STORAGE; // Assuming you have this in your .env
  const [model, setModel] = useState(false);
  const [swiper, setSwiper] = useState(null); // Initialize as null
  const [swiper1, setSwiper1] = useState(null); // Initialize as null

  const change_slide = (index, move) => {
    if (move && swiper) {
      swiper.slideTo(index); // Ensure swiper is not null before calling slideTo
    }
    document.querySelectorAll("video").forEach((item) => item.pause());
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-4">
        <div className="panel flex h-[30rem] w-full items-center justify-center overflow-hidden p-3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={400}
            navigation={true}
            onSwiper={setSwiper}
            onSlideChange={(_) => change_slide(_.realIndex)}
            className="h-full w-full overflow-hidden rounded-md"
          >
            {response?.item?.images.slice(0, 6)?.map((image, index) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  if (image[0] === "image") setModel(true);
                  if (swiper1) swiper1.slideTo(index);
                }}
                className="relative h-full w-full cursor-pointer rounded-md"
              >
                {image[0] === "image" ? (
                  <img
                    src={image[1]}
                    className="h-full w-full rounded-md object-cover"
                  />
                ) : (
                  <video
                    src={`${storage}/${image[1]}`}
                    controls
                    className="h-full w-full rounded-md object-cover"
                  ></video>
                )}
                {index === 5 && response?.item?.images.length > 6 && (
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/50">
                    <div className="-mt-1.5 flex items-center justify-center rounded-md border-2 border-gray-300 px-6 py-2.5 text-[.9rem] font-semibold tracking-wide text-white duration-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md">
                      <span>See More</span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="panel grid h-[7rem] w-full grid-cols-6 gap-3 overflow-hidden p-3">
          {response?.item?.images?.slice(0, 6)?.map((image, index) => (
            <div
              key={index}
              onClick={(_) => change_slide(index, true)}
              className={`group relative min-h-[20%] w-full cursor-pointer overflow-hidden rounded-md`}
            >
              {image[0] === "image" ? (
                <img
                  src={image[1]}
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <video
                  src={image[1]}
                  className="h-full w-full rounded-md object-cover"
                  poster="/media/layout/poster.png"
                ></video>
              )}

              <div
                className={`absolute left-0 top-0 h-full w-full bg-black/50 duration-300 group-hover:bg-black/0 ${
                  swiper && swiper.realIndex === index && "hidden"
                }`}
              ></div>

              {index === 5 && response?.item?.images.length > 6 && (
                <div
                  onClick={() => {
                    setModel(true);
                    if (swiper1) swiper1.slideTo(index);
                  }}
                  className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50 text-[.9rem] font-semibold text-white-light hover:text-white"
                >
                  <span>See More</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Viewer
        images={response && response.item.images}
        title={title}
        swiper={swiper1}
        setSwiper={setSwiper1}
        model={model}
        setModel={setModel}
      />
    </div>
  );
}
