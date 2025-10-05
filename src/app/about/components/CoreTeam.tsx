"use client";
import React, { useRef } from "react";
import { IoPerson } from "react-icons/io5";
import {
  ButtonNavLeft,
  ButtonNavRight,
} from "@/components/Shared/Button/ButtonNav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "./slider.module.css";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const person = [
    {
      name: "ABC",
      position: "Founder / CEO",
    },
    {
      name: "MNO",
      position: "CTO",
    },
    {
      name: "PQR",
      position: "Director",
    },
    {
      name: "xyz",
      position: "hehe",
    },
  ];

  return (
    <>
      <div
        className={`bg-white w-screen relative border-b-2 border-black px-8 py-7 h-max border-none`}
      >
        <div className="wrapper relative w-full my-14 h-1/2 lg:h-5/6 flex justify-center items-center text-black ">
          <ButtonNavLeft
            ref={prevRef}
            className={`${person.length <= 3 && "lg:hidden"}`}
          />
          <ButtonNavRight
            ref={nextRef}
            className={`${person.length <= 3 && "lg:hidden"}`}
          />
          <Swiper
            className={`mySwiper w-full items-center pb-14 ${styles.sliderWrapper}`}
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
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Only proceed if refs exist and navigation params exist
              if (
                prevRef.current &&
                nextRef.current &&
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {person.map((person, index) => (
              <SwiperSlide key={index} className="flex h-full mb-8">
                <div
                  key={person.name}
                  className="card w-full h-full flex flex-col justify-center items-center mb-4"
                >
                  <div className="bg-[var(--white-2-dark)] m-auto w-max aspect-square flex justify-center items-center rounded-[50%] p-8 tb:p-[65px] text-8xl tb:text-9xl bg-neutral-200 ">
                    <IoPerson />
                  </div>
                  <h1 className="mt-8 text-3xl tb:text-4xl font-bold text-center">
                    {person.name}
                  </h1>
                  <p className="mt-2 text-lg tb:text-xl text-center">
                    {person.position}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default About;
