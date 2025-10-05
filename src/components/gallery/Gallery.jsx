"use client"; // Required for hover and client interactivity

import Image from "next/image";
import galleryData from "../../../data/galleryData";
import SectionTitle from "../sectionTitle";

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">

      {/* Full width section */}
      <section
        className="relative w-screen overflow-hidden"
        style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      >

        {/* Heading */}
        <SectionTitle title="Gallery" pretitle="Explore Our Collection" />

        {/* Horizontal Scrollable Gallery */}
        <div className="flex overflow-x-scroll gap-6 py-20 cursor-grab scrollbar-hide">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 relative w-80 h-80 transform transition-transform duration-500 hover:scale-110 origin-center group
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
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-lg"
              />

              {/* Info box on hover */}
              <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-yellow-200 p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 text-center pointer-events-none">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

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
