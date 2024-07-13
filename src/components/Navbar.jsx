import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg  flex items-center justify-between border-b-[1px] border-zinc-500 mx-auto py-5">
      <div className="flex items-center"><img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="Links  ml-16 flex gap-12">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[2px] h-10 bg-zinc-600"></span>
          ) : (
            <a href="#" className="font-light text-sm flex items-center gap-1">
              {index == 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div></div>
      <Button/>
    </div>
  );
}

export default Navbar;
