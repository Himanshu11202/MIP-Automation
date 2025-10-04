"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import galleryData from "../../../data/galleryData";
import SectionTitle from "../sectionTitle";

export default function Gallery() {
  const scrollRef = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">
      {/* Heading */}
      <SectionTitle title="Gallery" pretitle="Explore Our Collection" />

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[60%] -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-green-100 transition"
      >
        <ChevronLeft size={30} className="text-green-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[60%] -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:bg-green-100 transition"
      >
        <ChevronRight size={30} className="text-green-600" />
      </button>

      {/* Horizontal Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-6 py-20 cursor-grab scrollbar-hide scroll-smooth"
      >
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 relative w-72 h-72 md:w-80 md:h-80 transform transition-transform duration-500 hover:scale-110 overflow-visible origin-center group
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
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-yellow-200 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-72 md:w-80 text-center pointer-events-none">
              <h3 className="font-bold text-gray-800">{item.title || item.alt}</h3>
              <p className="text-gray-600 text-sm">
                {item.description || "Click to know more"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
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
