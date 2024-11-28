import React from 'react'
import { CardForStaff } from './CardForStaff'

export default function Staff() {
  return (
    <div>
        <div
          className="w-full text-center mt-5"
          data-aos="fade-right"
          data-aos-duration="5000"
        >
        <h3 className="text-[2rem] font-bold text-main">Staff</h3>
          <div className="flex w-full items-center justify-center pb-5">
            <img src="/media/icons/icon/section-img.png" alt="" />
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-4 md:gap-8'>
            <CardForStaff />
            <CardForStaff />
            <CardForStaff />
        </div>
    </div>
  )
}
