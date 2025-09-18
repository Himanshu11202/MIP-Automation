import React from "react";
import Container from "./container";
import InteractiveFaq from "./FaqItems";

const faqdata = [
  {
    question: "question 1?",
    answer: "answer 1",
  },
  {
    question: "question 2?",
    answer: "answer 2",
  },
  {
    question: "question 3?",
    answer: "answer 3",
  },
  {
    question: "question 4?",
    answer: "answer 4",
  },
];

// This is a Server Component
export default function Faq() {
  return (
    <Container className="!p-0">
      <InteractiveFaq items={faqdata} />
    </Container>
  );
}
