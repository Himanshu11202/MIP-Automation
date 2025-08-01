import React from "react";
import { H3Heading, H4Heading } from "./Heading";

interface SubHeadingProps {
  children: string;
  align?: "left" | "right" | "center";
  className?: string;
  headingType?: "main" | "small";
}

const SubHeading = ({
  children,
  align = "left",
  className = "",
  headingType = "main",
}: SubHeadingProps) => {
  switch (headingType) {
    case "main":
      return (
        <H3Heading
          align={align}
          className={`
        text-neutral-500 font-normal my-1
        ${className}`}
        >
          {children}
        </H3Heading>
      );
    case "small":
      return (
        <H4Heading
          align={align}
          className={` 
        text-neutral-500 font-normal my-0
        ${className}`}
        >
          {children}
        </H4Heading>
      );
  }
};

export default SubHeading;
