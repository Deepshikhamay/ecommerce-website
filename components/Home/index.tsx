import React from "react";
import Link from "next/link";
import HeroBanner from "./products";
import ProductVariety from "./products/ProductVariety";

const ClothesCategory: React.FC = () => {
  return (
    <div className="bg-white py-2 h-[2000px] text-black object-fit">
      <HeroBanner />
      <div className=" px-6 mt-8">
       <ProductVariety />
      </div>
    </div>
  );
};

export default ClothesCategory;
