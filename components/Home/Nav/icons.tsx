import React, { useState } from "react";
import Menubar from "./menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Icons = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-6 -mt-10">
      <div className="h-8 sm:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ml-auto">
        <IoMdHeartEmpty className="text-[18px] sm:text-[22px] -mt-6" />
        <div className="-mt-9 h-[10px] sm:h-[14px] bg-red-600 rounded-full text-white text-[7px] sm:text-[8px] flex justify-center items-center -ml-2 px-[6px]">
          5
        </div>
      </div>
      <div className="h-8 sm:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer ml-3 -mb-2">
        <BsCart className="text-[15px] sm:text-[18px]" />
        <div className="ml-1 -mt-7 h-[10px] sm:h-[14px] bg-red-600 rounded-full text-white text-[7px] sm:text-[8px] flex justify-center items-center">
          6
        </div>
      </div>
    </div>
  );
};

export default Icons;
