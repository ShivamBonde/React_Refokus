import React from "react";

const Stripe = ({ val, ukey }) => {
  return (
    <div
      key={ukey}
      className="flex items-center justify-between border-r-[1.5px] w-[16.66%] px-4 py-5"
    >
      <img src={val.url} alt="" />
      <span>{val.number}</span>
    </div>
  );
};

export default Stripe;
