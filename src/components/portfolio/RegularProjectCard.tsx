import React, { useState } from "react";

const RegularProjectsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-8 text-center">
      <div className="mb-4">
        <div
          className={`animate-bounce ${
            expanded ? "rotate-180 transform" : ""
          } inline-block`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className="cursor-pointer text-xs text-teal-500"
        onClick={handleToggle}
      >
        More Projects
      </div>
      {expanded && (
        <div className="mt-4">
          {/* Content to be expanded goes here */}
          <p>Additional project details or components can be added here.</p>
        </div>
      )}
    </div>
  );
};

export default RegularProjectsCard;
