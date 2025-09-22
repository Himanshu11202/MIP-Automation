import React from "react";
import ClientSlider from "./ClientSlider";
import Testimonials from "./Testimonials";

const CoustomerFeedBack = () => {
  const CustomerFeedbackData = [
    {
      name: "Alice Johnson",
      position: "CEO, TechSolutions",
      feedback:
        "MIP Automations transformed our production line! The team’s expertise in design and development made implementation seamless. Highly recommended for any automation project.",
    },
    {
      name: "Rahul Verma",
      position: "Operations Manager, IndustroTech",
      feedback:
        "The automation solutions provided by MIP have significantly reduced manual errors and increased efficiency. Their team is professional and responsive throughout the process.",
    },
    {
      name: "Sofia Martinez",
      position: "Project Lead, SmartBuild",
      feedback:
        "Working with MIP was a pleasure. They understood our requirements perfectly and delivered a custom automation solution on time. The quality and attention to detail were impressive.",
    },
    {
      name: "Liam Smith",
      position: "Founder, GreenWorks",
      feedback:
        "Their innovative approach to automation helped us scale our operations quickly. The team is knowledgeable and always available to provide support whenever needed.",
    },
    {
      name: "Priya Kapoor",
      position: "Production Head, AutoMakers Inc.",
      feedback:
        "We were struggling with workflow bottlenecks, and MIP Automations provided a solution that streamlined our entire process. Truly a game-changer for our production efficiency.",
    },
  ];

  return <ClientSlider data={CustomerFeedbackData} />;
  // return <Testimonials data={CoustomerFeedBackData} />;
};

export default CoustomerFeedBack;
