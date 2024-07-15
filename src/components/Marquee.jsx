import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesurl, direction }) => {
  return (
    <div className="flex w-full   overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 14, repeat: Infinity }}
        className="flex flex-shrink-0 gap-24 py-10 pr-32"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 14, repeat: Infinity }}
        className="flex flex-shrink-0 gap-24 py-10 pr-32"
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
