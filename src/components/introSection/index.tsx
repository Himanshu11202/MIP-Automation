import React from "react";
import Counter from "./Counter";
import SectionTitle from "../sectionTitle";
import { Paragraph } from "../Shared/BlogUIKit";
import Card from "./Card";

const IntroSection = () => {
  return (
    <div className="my-20">
      <p className="uppercase text-center font-semibold text-foreground-muted text-2xl md:text-4xl">
        hello there
      </p>
      <h1 className="uppercase text-center font-semibold text-foreground text-5xl md:text-7xl">
        we are mip
      </h1>
      <Paragraph className="text-xl md:text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        repellendus cupiditate quis reiciendis! Quasi officiis sit voluptas.
        Cupiditate beatae, est dolor id nulla eum, provident nisi debitis saepe
        cumque consequatur.
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-8">
        <Card title="our coustomers" />
        <Card title="our coustomers" />
        <Card title="our coustomers" />
      </div>
    </div>
  );
};

export default IntroSection;
