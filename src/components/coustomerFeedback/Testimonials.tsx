import Image from "next/image";
import React from "react";
import Container from "../container";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Feedback from "./FeedbackText";

interface TestimonailsProps {
  data: {
    name: string;
    position: string;
    feedback: string;
  };
}

export default function Testimonials({ data }: TestimonailsProps) {
  return (
    <>
      <div className="h-full lg:col-span-2 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 py-4 md:p-8 lg:px-14 rounded-2xl lg:py-14   dark:bg-trueGray-800">
          <Feedback text={data.feedback} />

          <Avatar name={data.name} title={data.position} />
        </div>
      </div>
    </>
  );
}

interface AvatarProps {
  name: string;
  title: string;
}
function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="overflow-hidden rounded-full">
        <UserCircleIcon className="w-14 h-14 text-blue-950 dark:text-blue-600" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

const Mark = (props: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
};
