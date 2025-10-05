import React, { forwardRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { SwiperRef } from "swiper/react";

interface ButtonNavProps {
  className: string;
}

const ButtonNavLeft = forwardRef<HTMLButtonElement, ButtonNavProps>(
  ({ className }, ref) => {
    return (
      <button
        ref={ref}
        className={`${className} absolute top-1/2 z-10 left-6 bg-[var(--white-1-light)] p-4 rounded-[50%] opacity-50 hover:opacity-100`}
      >
        <IoIosArrowBack className="text-4xl" />
      </button>
    );
  }
);

const ButtonNavRight = forwardRef<HTMLButtonElement, ButtonNavProps>(
  ({ className }, ref) => {
    return (
      <button
        ref={ref}
        className={`${className} absolute top-1/2  z-10 right-6 bg-[var(--white-1-light)] p-4 rounded-[50%] opacity-50 hover:opacity-100`}
      >
        <IoIosArrowForward className="text-4xl" />
      </button>
    );
  }
);

export { ButtonNavLeft, ButtonNavRight };
