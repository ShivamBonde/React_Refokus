import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "Arqtile",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
    {
      title: "Ttr",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
    {
      title: "Year 22",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: true,
    },
    {
      title: "Yahoo!!",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
  ];

  return (
    <div className="mt-28">
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
};

export default Products;
