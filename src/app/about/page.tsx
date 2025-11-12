import React from "react";
import StorySegment from "./components/StorySegment";
import { Title } from "@/components/Shared/BlogUIKit";
import CoreTeam from "./components/CoreTeam";
import storyData from "@/data/about/storyData.json";

const AboutUs = () => {
  return (
    <>
      <Title align="center" className="mt-10">
        Our Team
      </Title>
      <CoreTeam />
      <Title align="center" className="mt-10">
        about our story
      </Title>
      {storyData.map((item, index) => (
        <StorySegment
          key={index}
          align={index % 2 === 0 ? "left" : "right"}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </>
  );
};

export default AboutUs;
