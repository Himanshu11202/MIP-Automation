import React from "react";

interface HeadingProps {
  children: string;
  align?: "left" | "right" | "center";
  className?: string;
  headingType?: "main" | "sub" | "small";
}

const Heading = ({
  children,
  align = "left",
  className,
  headingType = "main",
}: HeadingProps) => {
  switch (headingType) {
    case "main":
      return (
        <H2Heading align={align} className={className}>
          {children}
        </H2Heading>
      );
    case "sub":
      return (
        <H3Heading align={align} className={className}>
          {children}
        </H3Heading>
      );
    case "small":
      return (
        <H4Heading align={align} className={className}>
          {children}
        </H4Heading>
      );
  }
};

const H2Heading = ({ children, align, className }: HeadingProps) => {
  return (
    <h2
      className={`
    text-3xl font-semibold capitalize 
    my-4
    
    ${align === "left" ? "self-start" : align === "right" ? "self-end" : ""}

    ${className}`}
    >
      {children}
    </h2>
  );
};
export const H3Heading = ({ children, align, className }: HeadingProps) => {
  return (
    <h3
      className={`
    text-2xl font-bold capitalize my-3
    
    ${align === "left" ? "self-start" : align === "right" ? "self-end" : ""}

    ${className}`}
    >
      {children}
    </h3>
  );
};

export const H4Heading = ({ children, align, className }: HeadingProps) => {
  return (
    <h4
      className={`
    text-xl font-bold capitalize my-2
    
    ${align === "left" ? "self-start" : align === "right" ? "self-end" : ""}

    ${className}`}
    >
      {children}
    </h4>
  );
};

export default Heading;
