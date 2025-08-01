import React from "react";

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
      className={`
    my-3 text-lg text-wrap
    ${getJustify(justify)} ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
