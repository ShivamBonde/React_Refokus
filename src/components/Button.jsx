import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="min-w-40 px-5 py-2 rounded-full bg-zinc-50 flex items-center justify-between text-black">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
