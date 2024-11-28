import Input from '@/components/molecules/form/input'
import Link from 'next/link'
import React from 'react'

function MainData() {
  return (
    <div>
    {/* <div className="w-full grid grid-cols-2 gap-3">
      <Input type="text" name="name" placeholder="Name" label="Name" />
      <Input type="number" name="name" placeholder="Phone" label="Phone" />
    </div> */}
    <Input type="email" name="email" label="email" placeholder="email" />
    <Input type="number" name="phone" placeholder="Phone" label="Phone" />
    <Input type="password" name="password" label="password" placeholder="password" />
    <Input type="password" name="password_confirmation" label="password confirmation" placeholder="password confirmation" />



    <div className="w-full flex justify-start items-center py-2 select-none">
      <label className="flex items-center cursor-pointer gap-2 tracking-wide select-none">
        <Input name="" type="checkbox" className="form-checkbox" />
        <p className="text-[.9rem]">
          I agree with all
          <Link href="/policy" className="text-primary hover:underline px-1">
            Terms & Conditions
          </Link>
        </p>
      </label>
    </div>
  </div>
  )
}

export default MainData