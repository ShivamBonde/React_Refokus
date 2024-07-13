import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-5 py-[4px] rounded-full bg-zinc-100 flex items-center justify-between text-black'>
        <span className='text-sm font-medium'>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button