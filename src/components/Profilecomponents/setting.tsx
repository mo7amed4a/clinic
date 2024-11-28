import React from "react";
export default function Order({ data }) {
  return (
    <div className="w-full space-y-4">
      <div className="panel p-0 overflow-hidden">
        <div className="head !border-0">
          <p>All Bookings</p>
        </div>

        <div className="py-6 hidden px-8">
          <div className="w-full lg:w-[70%] text-gray-700 flex gap-3">
            <span className="material-symbols-outlined">emoji_objects</span>
            <p className="font-semibold tracking-wide leading-7">
              Here you can find your bookings.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative min-h-[20rem]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="toggle-panel">
            <label>
              Booking 1
              <input type="checkbox" />
            </label>
          </div>
          <div className="toggle-panel">
            <label>
              Booking 2
              <input type="checkbox" />
            </label>
          </div>
          <div className="toggle-panel">
            <label>
              Booking 3
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
