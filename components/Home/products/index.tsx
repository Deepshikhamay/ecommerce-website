import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner: React.FC = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <BiArrowBack className="text-sm md:text-lg" />
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next">
        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
      </div>
    ),
  };

  return (
    <div className="relative text-white text-[20px] w-full max-w-[1220px] mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src="/images/ecommerce-2140603_1280.jpg"
            className="w-full h-[500px] object-cover"
            alt="Slide 1"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/images/slide-3.png"
            className="w-full h-[500px] object-cover"
            alt="Slide 2"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>

        <div>
          <img
            src="/images/slide-2.png"
            className="w-full h-[500px] object-cover"
            alt="Slide 3"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
