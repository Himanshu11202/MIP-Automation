"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <Disclosure as="div" className="mb-5">
      <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 group">
        <span>{question}</span>
        <ChevronDownIcon className="w-5 h-5 text-indigo-500 group-data-[open]:rotate-180 transform transition-transform duration-200" />
      </DisclosureButton>
      <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
        {answer}
      </DisclosurePanel>
    </Disclosure>
  );
}

interface InteractiveFaqProps {
  items: FaqItemProps[];
}

export default function InteractiveFaq({ items }: InteractiveFaqProps) {
  return (
    <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
