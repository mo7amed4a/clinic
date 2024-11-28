import React, { useState } from "react";
import Input from "../molecules/form/input";

export default function Password() {
  const [data, setData] = useState({
    old_password: "",
    password: "",
    password_confirmation: "",
  });

  const _save_ = () => {
    if (data.password !== data.password_confirmation) {
      alert("Passwords do not match");
      return;
    }
    alert("Password change saved successfully!");
    // Add logic to save the password
  };

  return (
    <div className="panel p-0 overflow-hidden">
      <div className="head">
        <p>Change Password</p>
      </div>

      <div className="relative space-y-5 pt-8 pb-5 px-7">
        <div className="w-full">
          <div className="w-full lg:w-[70%] text-gray-700 flex gap-3">
            <span className="material-symbols-outlined">emoji_objects</span>
            <p className="font-semibold tracking-wide leading-7">
              Here change your password.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 pt-4">
          <div className="input-field">
            <label>Old Password</label>
            <Input
              type="password"
              name=""
              // value={data.old_password}
              // onChange={(e) =>
              //   setData({ ...data, old_password: e.target.value })
              // }
              className="input"
              placeholder="Enter old password"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 pb-[4rem]">
          <div className="input-field">
            <label>New Password</label>
            <Input
            name=""
              type="password"
              // value={data.password}
              // onChange={(e) => setData({ ...data, password: e.target.value })}
              className="input"
              placeholder="Enter new password"
            />
          </div>
          <div className="input-field">
            <label>Confirm Password</label>
            <Input
              type="password"
              name=""
              // value={data.password_confirmation}
              // onChange={(e) =>
              //   setData({ ...data, password_confirmation: e.target.value })
              // }
              className="input"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <div className="w-full pt-5 grid grid-cols-2 justify-end items-center gap-3 border-t sm:flex">
          <button
            onClick={_save_}
            className="p-2.5 w-[10rem] rounded-md bg-primary text-white duration-300 text-[1rem] tracking-wide hover:opacity-[.8] cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
