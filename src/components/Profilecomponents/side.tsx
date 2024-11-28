import { AuthButtons } from "../molecules/AuthButtons";

import Image from "next/image";
import { CiWallet } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

import {
  MdLockReset,
  MdLogout,
  MdOutlineAccountCircle,
  MdOutlineLinkedCamera,
  MdOutlinePaid,
  MdOutlineShoppingCart,
  MdPayments,
  MdSettings,
  MdShare,
} from "react-icons/md";

export default function Side({ data, tab, setTab }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="panel overflow-hidden p-0">
        <div className="head">
          <MdOutlineLinkedCamera />
          <p>Image</p>
        </div>

        <div className="p-4 ">
          <div className="relative group flex justify-center items-center select-none overflow-hidden bg-primary-light dark:bg-[#060818] p-1 m-auto border-2 border-primary/20 rounded-full w-[9rem] h-[9rem]">
            <Image
              src="/media/user/1.png"
              alt="User"
              layout="fill" // Fill the parent container
              objectFit="cover" // Ensure the image covers the entire container
              className="rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full cursor-pointer flex justify-center items-center flex-col bg-black/0 text-white group-hover:bg-black/50 transition-all duration-200 space-y-2">
              <input className="hidden" type="file" />
              <div className="hidden group-hover:block">
                <FaEdit className="h-5 w-5 text-gray-300" />
              </div>
              <span className="text-[.9rem] font-semibold hidden group-hover:block">
                Update
              </span>
            </div>
          </div>

          <div className="flex w-full items-center justify-center py-4">
            <span className="text-[1.2rem] font-semibold tracking-wide">
              {data.user.name}
            </span>
          </div>
        </div>
      </div>

      {/* Wallet Section */}
      <div className="panel overflow-hidden p-0">
        <div className="head">
          <div className="text-[1.4rem]">
            <CiWallet />
          </div>
          <p>Wallet</p>
        </div>

        <div className="flex w-full flex-col gap-5 p-6">
          <div className="flex w-full items-center justify-center gap-8">
            <div className="flex items-center gap-3  text-sm tracking-wider text-red-500 font-semibold">
              <span>Total Balance</span>
            </div>

            <div className="flex w-1/2 items-center justify-center gap-3 rounded-md border p-3 text-[1.1rem] font-bold tracking-wider text-primary border-main">
              <MdPayments className="text-[1.4rem]" />
              <span>{data?.user?.balance} </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <AuthButtons btn_1={"Deposit"} btn_2={"Withdraw"} />
          </div>
        </div>
      </div>

      <div className="panel overflow-hidden p-0">
        <div className="head">
          <div className="material-symbols-outlined text-[1.3rem]">
            <MdShare />
          </div>
          <p>Links</p>
        </div>

        <ul className="w-full select-none flex-col items-center justify-center p-4">
          <li
            onClick={() => setTab("info")}
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-b border-gray-300 p-4 hover:bg-primary-light ${
              tab === "info" ? "bg-primary-light text-primary" : "text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdOutlineAccountCircle />
            </span>
            <span className="font-semibold tracking-wide">Information</span>
          </li>
          <li
            onClick={() => setTab("wallet")}
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-b border-gray-300 p-4 hover:bg-primary-light ${
              tab === "wallet"
                ? "bg-primary-light text-primary"
                : "text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdOutlinePaid />
            </span>
            <span className="font-semibold tracking-wide">Balance</span>
          </li>
          <li
            onClick={() => setTab("password")}
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-b border-gray-300 p-4 hover:bg-primary-light ${
              tab === "password"
                ? "bg-primary-light text-primary"
                : "text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdLockReset />
            </span>
            <span className="font-semibold tracking-wide">Passwords</span>
          </li>
          <li
            onClick={() => setTab("order")}
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-b border-gray-300 p-4 hover:bg-primary-light ${
              tab === "order"
                ? "bg-primary-light text-primary"
                : "text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdOutlineShoppingCart />
            </span>
            <span className="font-semibold tracking-wide">Bookings</span>
          </li>
          <li
            onClick={() => setTab("setting")}
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-b border-gray-300 p-4 hover:bg-primary-light ${
              tab === "setting"
                ? "bg-primary-light text-primary"
                : "text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdSettings />
            </span>
            <span className="font-semibold tracking-wide">Settings</span>
          </li>
          <li
            className={`flex w-full cursor-pointer items-center justify-start gap-3 border-gray-300 p-4 hover:bg-primary-light ${
              tab === "logout" ? "text-primary" : "text-gray-700"
            }`}
          >
            {" "}
            <span className="material-symbols-outlined text-[1.4rem]">
              <MdLogout />
            </span>
            <span className="font-semibold tracking-wide">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
