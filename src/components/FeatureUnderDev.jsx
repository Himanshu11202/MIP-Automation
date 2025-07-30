import React from "react";
import Link from "next/link";

const FeatureUnderDev = () => {
  return (
    <div className="w-screen h-[90vh] flex flex-col justify-start items-start md:items-center py-12 tb:py-24 bg-white">
      <div>
        <h1 className="text-3xl tb:text-4xl text-center font-bold">
          This Feature is Under Developement
        </h1>
        <p className="text-xl tb:text-2xl text-center mt-3 tb:mt-6">
          We will try to implement it Soon
        </p>
      </div>
      <div className="px-20 md:px-40 self-start">
        <h2 className="text-3xl tb:text-4xl  mt-8 tb:mt-14 md:mt-24 ">
          explore other
        </h2>
        <ul className="text-2xl tb:text-3xl mt-8 flex flex-col gap-3 list-disc ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureUnderDev;
