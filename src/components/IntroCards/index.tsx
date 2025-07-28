import React from "react";
import Cards from "./Cards";
import {
  Cog6ToothIcon,
  CpuChipIcon,
  FaceSmileIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const IntroCards = () => {
  const IntroCardsData = [
    {
      title: "machine solution",
      Icon: WrenchScrewdriverIcon,
      description: "we create great machine",
    },
    {
      title: "solves reallife problem",
      Icon: LightBulbIcon,
      description: "solves real life problem",
    },
    {
      title: "automated workflow",
      Icon: Cog6ToothIcon,
      description: "we streamline complex processes effortlessly",
    },
    {
      title: "intelligent control",
      Icon: CpuChipIcon,
      description: "smart systems tailored for real-world efficiency",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 gap-y-4 place-items-center md:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 px-8 py-2">
      {IntroCardsData.map((item, index) => (
        <Cards
          key={index}
          title={item.title}
          Icon={item.Icon}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default IntroCards;
