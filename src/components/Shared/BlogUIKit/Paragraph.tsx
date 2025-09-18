import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: string | React.ReactNode;
  className?: string;
  justify?: "justify" | "center" | "right" | "left";
}

function getJustify(justify: string): string {
  switch (justify) {
    case "center":
      return "text-center";
    case "left":
      return "text-start";
    case "right":
      return "text-end";
    default:
      return "text-justify";
  }
}

const Paragraph = ({
  children,
  className,
  justify = "justify",
}: ParagraphProps) => {
  return (
    <p
      className={twMerge(
        "my-3 text-lg text-wrap", // defaults
        getJustify(justify),
        className // user-provided classes
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
