import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";

import React from "react";

interface ImageProps {
  src: string | StaticImport;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className = "" }: ImageProps) => {
  return (
    <div
      className={`relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg dark:shadow-neutral-800 my-10 mx-auto ${className}`}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="object-cover"
      />
    </div>
  );
};

export default Image;
