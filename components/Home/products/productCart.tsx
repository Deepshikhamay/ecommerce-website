import React from "react";
import Link from "next/link";

const ProductCard: React.FC = () => {
  return (
    <div className="cursor-pointer">
        <Link href="product/1">
          <div className="px-2 py-2">
            <img className="hover:scale-105 w-full h-[300px]" src="images/products/1.jpg" alt="" />
            <div>
                <h2>Product name</h2>
                <div className="flex items-center">
                    <p className="line-through font-semibold">500 Rs</p>
                    <p className="font-medium ml-4">400 Rs</p>
                    <p className="text-green-500 text-base ml-auto">20% off</p>
                </div>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default ProductCard;
 