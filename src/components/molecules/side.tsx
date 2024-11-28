"use client";

import Link from "next/link";
import Stars from "../atoms/icons/starts";

export default function Side({ data }) {
  return (
    <div className="space-y-6">
      <div className="panel overflow-hidden p-0">
        <div className="head">
          <p>Details</p>
        </div>

        <ul className="w-full cursor-default space-y-5 p-6">
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Reviews</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[.9rem] font-semibold tracking-wide">
              <Stars count="5" className="text-[1.2rem]" />
              <span className="opacity-[.8]">( {data.item.reviews} )</span>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Reply After</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[1rem] font-semibold tracking-wide">
              <span>15 Minutes</span>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Sales</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[1rem] font-semibold tracking-wide">
              <span>{data.item.orders}</span>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Ongoing orders</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[1rem] font-semibold tracking-wide">
              <span>{data.item.pending_orders}</span>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Service price</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[1rem] font-semibold tracking-wide">
              <span>{data.item.new_price}</span>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex w-1/2 items-center justify-start text-[1rem] font-semibold tracking-wide">
              <span>Delivery duration</span>
            </div>
            <div className="flex w-1/2 items-center justify-start gap-2 text-[1rem] font-semibold tracking-wide">
              <span>{data.item.duration}</span>
            </div>
          </li>
        </ul>
      </div>

      {data.item.vendor && (
        <div className="panel overflow-hidden p-0">
          <div className="head">
            <p>Vendor</p>
          </div>

          <div className="flex w-full items-center justify-between px-5 py-6">
            <div className="flex w-full flex-1 items-center justify-start gap-3">
              <Link
                href={`/profile/${data.item.vendor.id}`}
                className="layer h-14 w-14 overflow-hidden rounded-full border border-gray-500 p-0.5"
              >
                <img
                  src={data.item.image}
                  className="h-full w-full rounded-full object-cover"
                />
              </Link>

              <div className="-mt-[2px] flex flex-col items-center justify-center gap-1">
                <Link
                  href={"/"}
                  className="flex w-full items-center justify-start text-gray-950 hover:text-primary"
                >
                  <span className="text-[1.05rem] font-semibold tracking-wide">
                    {data.item.vendor.name}
                  </span>
                </Link>

                <p className="flex w-full select-none items-center justify-start">
                  <span className="material-symbols-outlined text-[.95rem] text-primary">
                    verified
                  </span>
                  <span className="px-1.5 text-[.95rem] text-gray-600">
                    Special
                  </span>
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="flex cursor-pointer items-center justify-center gap-2.5 rounded-md border border-primary bg-white px-4 py-2 text-primary duration-300 hover:bg-primary hover:text-white"
            >
              <span className="material-symbols-outlined mt-[3px] text-[1.2rem]">
                chat
              </span>
              <span className="text-[.95rem] font-semibold tracking-wide">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}

      <div className="panel p-2">
        <div className="group relative h-[15rem] w-full cursor-pointer overflow-hidden">
          {/* <Map data={data}/> */}

          <img
            src="/media/layout/map.png"
            className="h-full w-full rounded-md object-cover"
          />

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/5 duration-200 group-hover:bg-black/10">
            <img
              src="/media/layout/google-map.png"
              className="max-h-[45%] object-cover duration-300 group-hover:scale-[1.2]"
            />
          </div>
        </div>
      </div>

      <div className="panel overflow-hidden p-0">
        <Link
          href="/"
          className="layer flex h-[16rem] w-full items-center justify-center overflow-hidden rounded-md bg-primary p-4"
        >
          <img
            src="/media/layout/details-offer.png"
            className="h-full max-w-full"
          />
        </Link>
      </div>

      <div className="panel overflow-hidden p-0">
        <div className="head">
          <p>Share service</p>
        </div>

        <ul className="flex w-full items-center justify-center gap-3 px-5 pb-8 pt-7">
          <li className="rounded-full bg-[#0291ff] hover:opacity-[.8]">
            <a
              href="/"
              target="_blank"
              className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full text-[1.2rem]"
            >
              <i className="fa fa-twitter text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-[#006dc0] hover:opacity-[.8]">
            <a
              href="/"
              target="_blank"
              className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full text-[1.2rem]"
            >
              <i className="fa fa-facebook text-[1.1rem] text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-[#27d065] hover:opacity-[.8]">
            <a
              href="/"
              target="_blank"
              className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full text-[1.2rem]"
            >
              <i className="fa fa-whatsapp text-[1.1rem] text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-[#018bf4] hover:opacity-[.8]">
            <a
              href="/"
              target="_blank"
              className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full text-[1.2rem]"
            >
              <i className="fa fa-linkedin text-[1.1rem] text-white"></i>
            </a>
          </li>
          <li className="rounded-full bg-[#027fde] hover:opacity-[.8]">
            <a
              href="/"
              target="_blank"
              className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full text-[1.2rem]"
            >
              <i className="fa fa-telegram text-[1.1rem] text-white"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
