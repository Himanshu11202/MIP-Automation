import React from "react";

interface TitleProps {
  children: string;
  align?: "left" | "right" | "center";
  className?: string;
}

const Title = ({ children, align = "left", className = "" }: TitleProps) => {
  return (
    <h1
      className={`
    text-4xl font-bold capitalize my-6
    md:text-5xl
    ${
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center"
    }

    ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
