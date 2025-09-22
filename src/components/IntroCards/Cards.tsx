import { Titillium_Web } from "next/font/google";
import React, { SVGProps } from "react";

interface IntroCardsProps {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Cards = ({ Icon, title, description }: IntroCardsProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-yellow-50  cursor-pointer transition-colors duration-150">
      <div className="mb-4">
        <Icon className="w-16 aspect-square text-yellow-600" />
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <p className="mb-3 text-center font-normal text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default Cards;
