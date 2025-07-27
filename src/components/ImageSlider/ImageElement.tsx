import Image from "next/image";
import React from "react";

export interface ImageElementProps {
  desktopImage: string;
  mobileImage?: string;
}
const ImageElement = ({ desktopImage, mobileImage }: ImageElementProps) => {
  mobileImage = mobileImage ?? desktopImage; // use desktop image if mobile image not available
  return (
    <div className="w-full h-full">
      {/* Desktop image */}
      <div className="hidden md:block">
        <Image
          src={desktopImage}
          alt="Desktop version"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src={mobileImage}
          alt="Mobile version"
          width={600}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ImageElement;
