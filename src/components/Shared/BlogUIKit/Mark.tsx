import React from "react";
const Mark = (props: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
};
export default Mark;
