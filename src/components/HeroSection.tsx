import React from "react";

const HeroSection = () => {
  return (
    <div>
      <p className="uppercase text-neutral-400 font-bold text-left">
        welcome to MIP automations
      </p>
      <h1 className="capitalize text-pretty text-5xl md:text-7xl font-semibold  max-w-[750px] text-neutral-300">
        we are <span className="text-green-400">leading</span> brand which helps
        to <span className="text-green-400">design</span> and{" "}
        <span className="text-green-400">develop</span> your own{" "}
        <span className="text-green-400">Automation</span> World
      </h1>
    </div>
  );
};

export default HeroSection;
