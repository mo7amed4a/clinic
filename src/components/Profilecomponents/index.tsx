import React, { useState } from "react";
import { Formik } from "formik";

// import Side from "./side";
import Info from "./info";
import Setting from "./setting";
import Password from "./password";
import { RiAccountPinCircleLine } from "react-icons/ri";
import {
  MdLockReset,
  MdOutlinePaid,
  MdSettings,
  MdShoppingCart,
} from "react-icons/md";
import Wallet from "./wallet";
import Side from "./side";

export default function Index() {
  const [tab, setTab] = useState("info");

  // Static data (replace with actual data fetching if needed)
  const data = {
    status: true,
    user: {
      id: 1,
      name: "Coding Master",
      email: "codingmaster@gmail.com",
      image: "/public/media/Doctors/12.jpg",
      key: "+20",
      phone: "01099188572",
      country: "eg",
      city: "Cairo",
      street: "Talat Harb",
      location: "Cairo, Talat Harb",
      postal: "13713",
      created_at: "2024-08-10",
      login_at: "2024-09-10",
      ip: "192.86.1.11",
      agent: "Browser - Google Chrome v20.1.3",
      balance: 86.5,
      pending_balance: 16.5,
      active: true,
      allow_login: true,
      allow_notifications: true,
      allow_messages: true,
      allow_orders: true,
      allow_products: true,
      allow_mails: true,
    },
  };

  return (
    <div className="relative my-8 min-h-[80vh] w-full">
      <Formik
        initialValues={{}}
        onSubmit={(values) =>{}}
        className="my-5 w-full space-y-5"
      >
        <main className="flex cursor-default flex-wrap gap-4 lg:flex-nowrap lg:gap-8">
          {/* Sidebar for user info */}
          <div className="flex w-full flex-col gap-4 lg:w-[30%]">
            <Side data={data} tab={tab} setTab={setTab} />
          </div>

          {/* Main content area */}
          <div className="flex w-full flex-col gap-4 lg:w-[70%]">
            <div className="panel flex w-full select-none flex-wrap items-center justify-start gap-0 overflow-hidden p-0">
              {/* Tab: Information */}
              <div
                onClick={() => setTab("info")}
                className={`flex cursor-pointer items-center justify-center gap-3 border-b-2 px-6 py-4.5 text-[1rem] tracking-wide hover:text-primary ${
                  tab === "info"
                    ? " border-primary bg-primary-light text-primary"
                    : "border-white"
                }`}
              >
                <span className="mt-[1px] text-[1.4rem]">
                  <RiAccountPinCircleLine />
                </span>
                <span>Information</span>
              </div>

              {/* Tab: Balance */}
              <div
                onClick={() => setTab("wallet")}
                className={`flex cursor-pointer items-center justify-center gap-3 border-b-2 px-6 py-4.5 text-[1rem] tracking-wide hover:text-primary ${
                  tab === "wallet"
                    ? " border-primary bg-primary-light text-primary"
                    : "border-white"
                }`}
              >
                <span className="text-[1.4rem]">
                  <MdOutlinePaid />
                </span>
                <span>Balance</span>
              </div>

              {/* Tab: Password */}
              <div
                onClick={() => setTab("password")}
                className={`flex cursor-pointer items-center justify-center gap-3 border-b-2 px-6 py-4.5 text-[1rem] tracking-wide hover:text-primary ${
                  tab === "password"
                    ? " border-primary bg-primary-light text-primary"
                    : "border-white"
                }`}
              >
                <span className="text-[1.4rem]">
                  <MdLockReset />
                </span>
                <span>Passwords</span>
              </div>

              {/* Tab: Bookings */}
              <div
                onClick={() => setTab("order")}
                className={`flex cursor-pointer items-center justify-center gap-3 border-b-2 px-6 py-4.5 text-[1rem] tracking-wide hover:text-primary ${
                  tab === "order"
                    ? " border-primary bg-primary-light text-primary"
                    : "border-white"
                }`}
              >
                {" "}
                <span className="text-[1.3rem]">
                  <MdShoppingCart />
                </span>
                <span>Bookings</span>
              </div>

              {/* Tab: Settings */}
              <div
                onClick={() => setTab("setting")}
                className={`flex cursor-pointer items-center justify-center gap-3 border-b-2 px-6 py-4.5 text-[1rem] tracking-wide hover:text-primary ${
                  tab === "setting"
                    ? " border-primary bg-primary-light text-primary"
                    : "border-white"
                }`}
              >
                {" "}
                <span className="text-[1.3rem]">
                  <MdSettings />
                </span>
                <span>Settings</span>
              </div>
            </div>

            {tab === "info" && <Info data={data} />}
            {/* Future components for other tabs */}
            {tab === "setting" && <Setting data={data} />}
            {tab === "password" && <Password data={data} />}
            {/* {tab === "order" && <Order data={data} />} */}
            {tab === "wallet" && <Wallet data={data} />}
          </div>
        </main>
      </Formik>
    </div>
  );
}
