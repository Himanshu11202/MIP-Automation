import React from "react";
import Container from "./container";

export default function SectionTitle({
  align = "",
  zeroXMarginPadding = false,
  zeroYMarginPadding = false,
  className = "",
  pretitle = "",
  title = "",
  children = "",
}) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        align === "left" ? "" : "items-center justify-center text-center"
      }
      ${zeroXMarginPadding ? "mx-0 px-0" : ""}
      ${zeroYMarginPadding ? "my-0 py-0" : ""}
      ${className}
      `}
    >
      {pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {pretitle}
        </div>
      )}

      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {children}
        </p>
      )}
    </Container>
  );
}
