import React from "react";

const ElipsisText = ({
  children,
  maxChars = 100,
  className,
}: {
  children: string;
  maxChars?: number;
  className?: string;
}) => {
  let body = children;
  if (body.length > maxChars) {
    body = body.substring(0, maxChars);
    body += "...";
  }
  return <p className={className}>{body}</p>;
};

export default ElipsisText;
