import React from "react";
import styles from "../CommonCss.module.css";

const Button = ({
  className,
  children,
  handleClick = null,
  goto = null,
  type,
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center px-4 py-2 rounded-full border-none text-black text-base transition-colors duration-200 hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
