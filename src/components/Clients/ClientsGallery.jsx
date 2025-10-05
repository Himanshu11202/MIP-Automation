"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const clientLogos = [
  "/clints/client1.png",
  "/clints/client2.png",
  "/clints/client3.png",
  "/clints/client4.png",
  "/clints/client5.png",
  "/clints/client6.png",
  "/clints/client7.png",
  "/clints/client8.png",
  "/clints/client9.png",
];

export default function ClientsGallery() {
  return (
    <div
      className="relative bg-green-500 py-14 mb-10 w-screen"
      style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Our Clients
      </h2>

      <Swiper
        className="w-full"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        spaceBetween={8}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clientLogos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex justify-center items-center bg-white rounded-xl shadow-lg p-4 h-44 w-40"
            >
              <img
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-48 w-full object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
