"use client"; // Required for hover and client interactivity

import Image from "next/image";
import galleryData from "../../../data/galleryData";
import SectionTitle from "../sectionTitle";
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

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}
      <SectionTitle
        pretitle="pre title"
        title="Gallery"
        align="left"
        zeroXMarginPadding
      />

      {/* Horizontal Scrollable Gallery */}
      <div className="flex overflow-visible gap-6 py-3 cursor-grab scrollbar-hide">
        <Swiper
          className={`mySwiper w-full items-center overflow-visible ${styles.sliderWrapper}`}
          spaceBetween={2}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },

            600: {
              slidesPerView: 3,
            },

            // when window width is >= 640px
            1000: {
              slidesPerView: 4,
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
          {galleryData.map((item, index) => (
            <SwiperSlide key={index} className="flex h-full">
              {/* <Cards clientFeedback={item} /> */}
              <div
                key={index}
                className={`flex-shrink-0 relative w-80 h-80 md:w-80 md:h-82 transform transition-transform duration-500 hover:scale-110 overflow-visible origin-center group
              ${
                index % 3 === 0
                  ? "rotate-3 translate-y-2"
                  : index % 3 === 1
                  ? "-rotate-3 -translate-y-2"
                  : "rotate-6 translate-y-1"
              }`}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />

                {/* Info box on hover */}
                <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-yellow-200 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 md:w-80 text-center pointer-events-none">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Smooth scroll hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
