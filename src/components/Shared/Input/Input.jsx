import React from "react";
import styles from "../CommonCss.module.css";

const Input = ({
  name,
  value,
  placeholder,
  className,
  handleChange,
  type,
  required = false,
  autofocus = false,
}) => {
  return (
    <input
      value={value}
      name={name}
      autoFocus={autofocus}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      required={required}
      className={`px-4 py-2 h-auto text-base ${className}`}
    />
  );
};

export default Input;
