"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MobileImg from "./mobile.png";
import TapImg from "./tap.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import "./styles.css";

const CategoriesSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 50 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <div className="w-full h-[280px]  bg-[#BAE6D1] px-4 py-8 flex  justify-center">
      <div className="w-[140px] text-black flex justify-start flex-col  my-6">
        <span className="text-md font-400 mb-[30px] ">top offers</span>
        <div>
          <span className="text-sm  bg-white   font-bold py-1 px-2  ">
            shop
          </span>
        </div>
      </div>

      <>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper  w-full h-[200px] py-10 px-10"
          virtual
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide
              className="bg-white p-4 rounded-lg shadow-md"
              key={slideContent}
              virtualIndex={index}
            >
              <Image src={index % 2 === 0 ? TapImg : MobileImg} alt="tv Icon" />
              <p className="text-sm text-gray-700 mt-2">
                {index % 2 === 0
                  ? "Samsung Galaxy A15 256GB 8GB 4G LTE"
                  : "Samsung Galaxy A15 128GB 8GB 4G LTE"}
              </p>
              <span className="text-sm font-bold text-[#4ABD86]">
                EGP 5,999.00
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default CategoriesSlider;
