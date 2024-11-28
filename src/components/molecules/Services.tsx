"use client";

import Link from "next/link";
import Card from "./card";
import { useFetch } from "@/hooks";

export default function Services({ title }) {
  const services = [
    {
      id: 1,
      name: "Nesma Ahmed",
      image: "Doctors/6.jpg",
      description: "Ophthalmology (Eyes)",
    },
    {
      id: 2,
      name: "Mohamed Ali",
      image: "Doctors/7.jpg",
      description: "Cardiology",
    },
    {
      id: 3,
      name: "Sara Ahmed",
      image: "Doctors/doc5.jpg",
      description: "Dermatology",
    },
  ];
  const { data } = useFetch({
    endpoint: `client/home`,
    queryKey: [`client/home`],
  });
  // console.log("🚀 ~ Services ~ data:", data);

  return (
    <Link
      href={"/services/1"}
      className="my-7"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <div
        className="w-full text-center mt-5"
        data-aos="fade-right"
        data-aos-duration="5000"
      >
        <h3 className="text-[2rem] font-bold text-main">{title}</h3>
        <div className="flex w-full items-center justify-center pb-5">
          <img src="/media/icons/icon/section-img.png" alt="" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} data={service} />
        ))}
      </div>
    </Link>
  );
}
