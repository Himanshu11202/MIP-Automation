import React from "react";
import Counter from "./Counter";
import SectionTitle from "../sectionTitle";
import { Paragraph } from "../Shared/BlogUIKit";

const IntroSection = () => {
  return (
    <div>
      <p className="uppercase text-center font-semibold text-foreground-muted text-2xl">
        hello there
      </p>
      <h1 className="uppercase text-center font-semibold text-foreground text-5xl">
        we are mip
      </h1>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        repellendus cupiditate quis reiciendis! Quasi officiis sit voluptas.
        Cupiditate beatae, est dolor id nulla eum, provident nisi debitis saepe
        cumque consequatur.
      </Paragraph>
    </div>
  );
};

export default IntroSection;
