import React from "react";
import Link from "next/link";
import ProductCard from "./productCart";

const ProductVariety: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-full">
        Select Your Product.
      </div>
      <div className="flex justify-center items-center h-full">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        aliquid incidunt rem qui reiciendis dicta, molestias voluptas sequi
        nostrum placeat, laboriosam deleniti consectetur?.
      </div>

      {/* products grid */}
      <div className="mx-12 mt-8 grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductVariety;
