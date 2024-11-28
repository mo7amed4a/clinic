import React from "react";
import Input from "../molecules/form/input";
import { Form, Formik } from "formik";
export default function Info({ data }) {
  return (
    <div className="panel overflow-hidden p-0">
      <div className="head">
        <p>Information</p>
      </div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
        <div className="relative space-y-6 px-7 pb-5 pt-6 sm:space-y-7">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div>
              <label></label>
              <Input
                label="Full Name"
                type="text"
                value={data?.user?.name}
                className="input-field"
              />
            </div>
            <div>
              <Input
                label="Email"
                type="email"
                value={data?.user?.email}
                className="input-field"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div>
              <Input
                label="Location"
                type="text"
                value={data?.user?.location}
                className="input-field"
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-6">
              <div>
                <Input label="Postal" type="text" className="input-field" />
              </div>
              <div>
                <Input
                  label="Last Login"
                  type="text"
                  value={data?.user?.login_at}
                  readOnly
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid w-full grid-cols-2 gap-6">
              <div>
                <label>Key Code</label>
                <select
                  value={data?.user?.phone_code}
                  className="input-field w-full rounded-md border border-gray-300 p-2.5 "
                >
                  <option value="+20">+20</option>
                  <option value="+1">+1</option>
                </select>
              </div>
              <div>
                <Input
                  label="Phone"
                  type="text"
                  value={data?.user?.phone}
                  className="input-field w-full rounded-md border border-gray-300 p-2.5 "
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-6">
              <div>
                <label>Country</label>
                <select
                  value={data?.user?.country}
                  className="input-field select-form w-full rounded-md border border-gray-300 p-2.5 "
                >
                  <option value="eg">Egypt</option>
                  <option value="us">USA</option>
                </select>
              </div>
              <div>
                <Input
                  label="city"
                  type="text"
                  value={data?.user?.city}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 pb-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid w-full grid-cols-2 gap-6">
              <div>
                <label>IP</label>
                <Input
                  type="text"
                  value={data?.user?.ip}
                  readOnly
                  className="input-field"
                />
              </div>
              <div>
                <label>Device</label>
                <Input
                  type="text"
                  value={data?.user?.agent}
                  readOnly
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 items-center justify-end gap-3 border-t pt-5 sm:flex">
            <button
              // onClick={_save_}
              className="w-[10rem] cursor-pointer rounded-md bg-primary p-2.5 text-[1rem] tracking-wide text-white duration-300 hover:opacity-[.8]"
            >
              Save
            </button>
          </div>
        </div>

        </Form>
      </Formik>
    </div>
  );
}
