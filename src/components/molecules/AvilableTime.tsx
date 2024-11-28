"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Sun from "../atoms/icons/sun";
import Moon from "../atoms/icons/moon";

export default function AvilableTime() {
  const times = [
    {
      id: 1,
      day: "today",
      pointsNum: 5,
    },
    {
      id: 2,
      day: "tomorrow",
      pointsNum: 3,
    },
    {
      id: 3,
      day: "today",
      pointsNum: 9,
    },
    {
      id: 4,
      day: "Saturday",
      pointsNum: 6,
    },
    {
      id: 5,
      day: "Sunday",
      pointsNum: 2,
    },
    {
      id: 6,
      day: "Monday",
      pointsNum: 3,
    },
  ];

  const MoriningTime = [
    {
      id: 1,
      time: "1:30",
    },
    {
      id: 2,
      time: "1:30",
    },
    {
      id: 4,
      time: "1:30",
    },
    {
      id: 5,
      time: "1:30",
    },
    {
      id: 6,
      time: "1:30",
    },
    {
      id: 7,
      time: "1:30",
    },
  ];

  const eveningTime = [
    {
      id: 1,
      time: "1:30",
    },
    {
      id: 2,
      time: "1:30",
    },
    {
      id: 4,
      time: "1:30",
    },
    {
      id: 5,
      time: "1:30",
    },
    {
      id: 6,
      time: "1:30",
    },
    {
      id: 7,
      time: "1:30",
    },
  ];

  return (
    <main
      className="min-h-60 mt-[20px] rounded-sm bg-white p-4 font-bold "
      data-aos="zoom-in"
      data-aos-duration="4000"
    >
      <h4 className="text-[16px] text-main sm:text-[20px] font-GeistVF">
        Available daily from 11 am to 3.30 pm and from 4.5 pm to 9 pm.
      </h4>
      <h3 className="my-3 text-[15px] font-medium text-maintitle sm:text-[19px]">
        Available Appointments
      </h3>
      <div className="flex w-full items-center justify-center pb-5">
        <img src="/media/icons/icon/section-img.png" alt="" />
      </div>
      <div className="m-auto mb-4 w-full sm:w-9/12 relative mainSwiper ">
        <Swiper
          modules={[Navigation]}
          // spaceBetween={15}
          slidesPerView={5}
          speed={500}
          loop={true}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            500: { slidesPerView: 2.5, spaceBetween: 5 },
            900: { slidesPerView: 4, spaceBetween: 10 },
            1200: { slidesPerView: 5, spaceBetween: 15 },
            1400: { slidesPerView: 6, spaceBetween: 15 },
          }}
        >
          {times.map((time) => (
            <SwiperSlide key={time.id}>
              <div className="flex py-2">
                <div className="flex flex-col rounded-[5px] p-[5px] text-center shadow-custom ">
                  <p className="text-[18px]">{time.day}</p>
                  <span>
                    <span className="text-[#ef0f0f]">{time.pointsNum}</span>{" "}
                    appointments
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-2 flex w-full items-center justify-center">
        <img src="/media/icons/icon/section-img.png" alt="" />
      </div>
      <div className="   sm:ms-11 p-1 sm:p-6">
        {/* Morning Time Section */}
        <div className="flex items-center justify-start gap-4">
          <div className=" flex items-center justify-around gap-2">
            <Sun />

            <span>Morning</span>
          </div>
          <div className="my-4 flex items-center gap-4 overflow-auto">
            {MoriningTime.map((time) => (
              <span
                className="rounded-sm border border-maintitle px-6 py-2"
                key={time.id}
              >
                {time.time}
              </span>
            ))}
          </div>
        </div>

        {/* Evening Time Section */}
        <div className="flex items-center justify-start gap-4">
          <div className="ms-2 flex items-center justify-around gap-2">
            <Moon />

            <span>Evening</span>
          </div>
          <div className="my-6 flex items-center gap-4 overflow-auto">
            {eveningTime.map((time) => (
              <span
                className="rounded-sm border border-maintitle px-6 py-2"
                key={time.id}
              >
                {time.time}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
