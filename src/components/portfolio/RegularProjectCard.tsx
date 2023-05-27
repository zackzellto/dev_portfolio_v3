import React, { useState } from "react";

type Props = {
  icon: string;
};

const RegularProjectsCard = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-8 text-center">
      <div className="">
        <div
          className={`animate-bounce ${
            expanded ? "rotate-180 transform" : ""
          } inline-block`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-14 w-14 cursor-pointer"
            fill="#00ADB5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className="cursor-pointer text-[16px] text-white"
        onClick={handleToggle}
      >
        More Projects
      </div>
      {expanded && (
        <div className="mt-4">
          <div className="flex flex-wrap justify-center">
            <div className="relative  m-auto w-[320px] rounded-xl bg-[#393E46] p-8 text-[14px] text-white shadow-xl drop-shadow-lg">
              <img
                className=" mx-auto mb-4 hidden transform shadow-xl transition-all duration-300 hover:scale-105 sm:block sm:w-3/4 sm:justify-center sm:overflow-hidden sm:opacity-30 sm:hover:opacity-100 md:w-[60%]"
                src={props.icon}
                alt="project icon"
              />
              <div className=" text-white "></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegularProjectsCard;
