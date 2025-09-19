"use client"; // Required for hover and client interactivity

import Image from "next/image";
import galleryData from "../../data/galleryData";

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <div
          className="mx-auto mb-10"
          style={{ width: "1300px", height: "4px", backgroundColor: "#047857" }}
        ></div>
        <h2 className="text-5xl font-extrabold tracking-wide text-gray-800 font-serif mb-6">
          MIP Gallery
        </h2>
        
      </div>

      {/* Horizontal Scrollable Gallery */}
      <div className="flex overflow-x-auto gap-6 py-4 cursor-grab scrollbar-hide">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 relative w-80 h-80 md:w-96 md:h-96 transform transition-transform duration-500 hover:scale-110 overflow-visible origin-center group
              ${index % 3 === 0
                ? "rotate-3 translate-y-2"
                : index % 3 === 1
                ? "-rotate-3 -translate-y-2"
                : "rotate-6 translate-y-1"}`}
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover rounded-2xl shadow-lg"
            />

            {/* Info box on hover */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-80 md:w-96 text-center pointer-events-none">
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
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
      
      <div
          className="mx-auto mb-10px"
          style={{ width: "1300px", height: "4px", backgroundColor: "#047857" }}
        ></div>
    </section>
    
    
  );
}
