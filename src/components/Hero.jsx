import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import HeroCrousal from "./HeroCrousal";

const Hero = () => {
  const products = useSelector((store) => store.products.data);
  // console.log(products);
  return (
    <div className="hero">
      <HeroCrousal />
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Hero;
