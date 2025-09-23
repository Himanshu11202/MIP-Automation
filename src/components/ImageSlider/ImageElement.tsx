import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ImageElementProps {
  desktopImage: string;
  mobileImage?: string;
  alt?: string;
  className?: string;
}
const ImageElement = ({
  desktopImage,
  mobileImage,
  alt,
  className,
}: ImageElementProps) => {
  mobileImage = mobileImage ?? desktopImage; // use desktop image if mobile image not available
  return (
    <div className="w-full h-full overflow-hidden">
      {/* Desktop image */}
      <div className="hidden md:block w-full h-full">
        <Image
          src={desktopImage}
          alt={alt || "Desktop version"}
          fill // required
          className={twMerge("w-full h-full object-cover ", className)}
        />
      </div>

      {/* Mobile image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={mobileImage}
          alt={alt || "Mobile version"}
          fill
          className={`w-full h-full object-cover ${className}`}
        />
      </div>
    </div>
  );
};

export default ImageElement;
