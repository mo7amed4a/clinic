"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function ServicesImage({ title }) {
  const images = [
    {
      id: 1,
      src: "/media/Doctors/doc3.jpg",
    },
    {
      id: 2,
      src: "/media/Doctors/doc4.jpg",
    },
    {
      id: 3,
      src: "/media/Doctors/doc5.jpg",
    },
    {
      id: 4,
      src: "/media/Doctors/13.jpg",
    },
    {
      id: 5,
      src: "/media/Doctors/doctor-detail.jpg",
    },
    {
      id: 6,
      src: "/media/Doctors/doc4.jpg",
    },
  ];

  return (
    <main
      className="relative"
      data-aos="zoom-out-down"
      data-aos-duration="4000"
    >
      <div className="w-full text-center">
        <h3 className="text-[2rem] font-bold text-main">{title}</h3>
        <div className="flex w-full items-center justify-center pb-5">
          <img src="/media/icons/icon/section-img.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-10 gap-4 max-w-6xl mx-auto bg-gray-100">
        <div className="grid gap-4 lg:col-span-2">
          <Image
            className="size-full"
            src={images[0].src}
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="size-full"
            src={images[1].src}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="lg:col-span-4">
          <Image
            className="size-full"
            src={images[1].src}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="grid gap-4 col-span-full lg:col-span-4">
          <Image
            className="size-full"
            src={images[1].src}
            width={500}
            height={500}
            alt=""
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <Image
              className="size-full lg:col-span-2"
              src={images[0].src}
              width={500}
              height={500}
              alt=""
            />
            <Image
              className="size-full lg:col-span-3"
              src={images[1].src}
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
