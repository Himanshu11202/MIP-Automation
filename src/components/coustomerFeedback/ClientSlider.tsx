"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Cards from "./Cards";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import styles from "./slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonials from "./Testimonials";

interface ClientSliderProps {
  data: {
    name: string;
    position: string;
    feedback: string;
  }[];
}

const ClientSlider = ({ data }: ClientSliderProps) => {
  return (
    <Swiper
      className={`mySwiper w-full items-center ${styles.sliderWrapper}`}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 320px
        "320": {
          slidesPerView: 1,
        },

        "600": {
          slidesPerView: 2,
        },

        // when window width is >= 640px
        1000: {
          slidesPerView: 3,
        },
      }}
      loop={true}
      grabCursor={true}
      modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 50,
        scale: 0.9,
        modifier: 1, // ✅ intensity of effect
        slideShadows: false, // optional: disables shadows
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="flex h-full">
          {/* <Cards clientFeedback={item} /> */}
          <Testimonials data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;
