import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const ButtonNavLeft = ({ slider, className }) => {
  return (
    <button
      className={`${className} absolute top-1/2 z-10 left-6 bg-[var(--white-1-light)] p-4 rounded-[50%] opacity-50 hover:opacity-100`}
      onClick={() => slider?.current?.slickPrev()}
    >
      <IoIosArrowBack className="text-4xl" />
    </button>
  );
};
const ButtonNavRight = ({ slider, className }) => {
  return (
    <button
      className={`${className} absolute top-1/2  z-10 right-6 bg-[var(--white-1-light)] p-4 rounded-[50%] opacity-50 hover:opacity-100`}
      onClick={() => slider?.current?.slickNext()}
    >
      <IoIosArrowForward className="text-4xl" />
    </button>
  );
};

export { ButtonNavLeft, ButtonNavRight };
