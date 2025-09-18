import React from "react";
import Counter from "./Counter";

const Card = ({ title = "no title" }: { title: string }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <Counter className="text-7xl font-bold " />
      <h2 className="uppercase text-2xl text-neutral-300">{title}</h2>
    </div>
  );
};

export default Card;
