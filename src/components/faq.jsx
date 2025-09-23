import React from "react";
import Container from "./container";
import InteractiveFaq from "./FaqItems";

const faqData = [
  {
    question: "What types of automation solutions do you provide?",
    answer:
      "We offer end-to-end automation solutions including industrial process automation, robotics integration, and custom software for workflow optimization.",
  },
  {
    question: "How long does it take to implement an automation project?",
    answer:
      "Implementation time depends on project complexity. Small-scale solutions can take 2-4 weeks, while large-scale industrial systems may take 3-6 months.",
  },
  {
    question: "Do you provide support after installation?",
    answer:
      "Yes! We provide full post-installation support including maintenance, troubleshooting, and software updates to ensure your system runs smoothly.",
  },
  {
    question: "Can you customize solutions for specific business needs?",
    answer:
      "Absolutely. Our team works closely with clients to design and develop automation systems tailored to their specific requirements and goals.",
  },
  {
    question: "Are your automation solutions compatible with existing systems?",
    answer:
      "Yes, our solutions are designed to integrate seamlessly with your current machinery, software, and processes without major disruptions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including manufacturing, logistics, healthcare, agriculture, and smart buildings, providing solutions that enhance efficiency and reduce costs.",
  },
  {
    question: "How do I get started with MIP Automations?",
    answer:
      "You can reach out to our team through our contact page. We'll schedule a consultation to understand your needs and propose the best automation solution.",
  },
];

// This is a Server Component
export default function Faq() {
  return (
    <Container className="!p-0">
      <InteractiveFaq items={faqData} />
    </Container>
  );
}
