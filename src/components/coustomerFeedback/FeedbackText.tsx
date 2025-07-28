import React, { useState } from "react";

interface FeedbackTextProps {
  text: string;
  maxChars?: number; // optional prop to control how many characters to show initially
}

const Feedback = ({ text, maxChars = 150 }: FeedbackTextProps) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxChars;
  const displayText =
    expanded || !isLong ? text : text.slice(0, maxChars) + "...";

  return (
    <div>
      <p className="text-lg md:text-xl lg:text-2xl leading-normal">
        {displayText}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 font-medium hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default Feedback;
