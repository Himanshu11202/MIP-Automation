"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";

import ImageElement from "./ImageElement";
import styles from "./slider.module.css";
import Image from "next/image";

const ImageSlider = () => {
  return (
    <div
      className={`w-full h-[80vh] text-black bg-black ${styles.sliderWrapper}`}
    >
      <Swiper
        className="mySwiper h-full w-full"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        modules={[EffectCreative, Autoplay, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <ImageElement
              mobileImage="/test-img-mobile.png"
              desktopImage="/test-img-desktop.png"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
