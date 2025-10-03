// components/Tooltip.tsx
import React from "react";

interface TooltipProps {
  content: {
    state: string;
    stores: number;
  };
  position: {
    x: number;
    y: number;
  };
}

const Tooltip: React.FC<TooltipProps> = ({ content, position }) => {
  if (!content) return null;

  return (
    <div
      className="absolute bg-white text-black px-4 py-2 rounded-md shadow-lg pointer-events-none"
      style={{
        left: position.x + 15,
        top: position.y + 15,
        zIndex: 1000,
        transition: "opacity 0.2s",
      }}
    >
      <h3 className="font-bold">{content.state}</h3>
      <p>Stores: {content.stores}</p>
    </div>
  );
};

export default Tooltip;