import React from "react";

const useDemo = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("test: test hook delete in prod");
    }, 1000);
  });
};

export default useDemo;
