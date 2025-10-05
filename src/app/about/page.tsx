import React from "react";
import StorySegment from "./components/StorySegment";
import SectionTitle from "@/components/sectionTitle";
import { Title } from "@/components/Shared/BlogUIKit";
import CoreTeam from "./components/CoreTeam";
const AboutUs = () => {
  const storyData = [
    {
      title: "Humble Beginnings",
      description:
        "Our journey began in a modest garage, with just a few tools, a single lathe machine, and an unshakable belief in the power of innovation. Driven by passion and guided by precision, we laid the first stone of what would become a trailblazing machine manufacturing company.",
      image: {
        src: "/test-img-desktop.png",
        alt: "story part 1",
      },
    },
    {
      title: "Early Struggles, Unbreakable Spirit",
      description:
        "In the initial years, we faced countless challenges — limited resources, tight deadlines, and steep competition. But with a committed team and a relentless desire to grow, we transformed every obstacle into an opportunity to learn and refine our craft.",
      image: {
        src: "/test-img-desktop.png",
        alt: "story part 2",
      },
    },
    {
      title: "Innovation and Expansion",
      description:
        "Fueled by years of experience and customer trust, we began expanding our workshop, investing in advanced CNC machinery, and building a skilled workforce. Our focus on research and engineering excellence helped us deliver customized, high-performance solutions to industries across India.",
      image: {
        src: "/test-img-desktop.png",
        alt: "story part 3",
      },
    },
    {
      title: "Trusted Across Industries",
      description:
        "Today, our machines power production lines in automotive, aerospace, and heavy engineering sectors. From that small garage to a state-of-the-art facility, our story reflects not just growth, but a legacy built on quality, reliability, and a passion for making machines that move the world forward.",
      image: {
        src: "/test-img-desktop.png",
        alt: "story part 4",
      },
    },
  ];
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
