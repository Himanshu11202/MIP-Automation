import React from "react";
import ClientSlider from "./ClientSlider";
import Testimonials from "./Testimonials";

const CoustomerFeedBack = () => {
  const CoustomerFeedBackData = [
    {
      name: "Abc",
      position: "xyz",
      feedback:
        "lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit",
    },
    {
      name: "Abc",
      position: "xyz",
      feedback:
        "lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit",
    },
    {
      name: "Abc",
      position: "xyz",
      feedback:
        "lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit lorem epsum dior amit",
    },
    {
      name: "Abc",
      position: "xyz",
      feedback: "lorem epsum dior amit",
    },
    {
      name: "Abc",
      position: "xyz",
      feedback: "lorem epsum dior amit",
    },
  ];
  return <ClientSlider data={CoustomerFeedBackData} />;
  // return <Testimonials data={CoustomerFeedBackData} />;
};

export default CoustomerFeedBack;
