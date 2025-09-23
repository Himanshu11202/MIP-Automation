import React from "react";
import Counter from "./Counter";

const Card = ({
  title = "no title",
  start = 0,
  end = 100,
}: {
  title: string;
  start?: number;
  end?: number;
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <Counter
        className="text-4xl md:text-7xl lg:text-9xl font-bold "
        start={start}
        end={end}
      />
      <h2 className="uppercase text-2xl text-neutral-300">{title}</h2>
    </div>
  );
};

export default Card;
