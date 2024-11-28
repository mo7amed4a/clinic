import Input from "@/components/molecules/form/input";
import Link from "next/link";
import React from "react";

function MainData() {
  return (
    <div>
      <Input type="email" name="email" placeholder="Email" label="Email" />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
      />

      <div className="flex w-full select-none items-center justify-start pb-1 pt-2">
        <label className="flex cursor-pointer select-none items-center gap-2 tracking-wide">
          <Input type="checkbox" name="check" className="form-checkbox" />
          <p className="text-[.9rem]">
            I agree with all
            <Link href="/" className="px-1 text-primary hover:underline">
              Terms & Conditions
            </Link>
          </p>
        </label>
      </div>
    </div>
  );
}

export default MainData;
