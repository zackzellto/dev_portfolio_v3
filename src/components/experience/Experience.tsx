import React, { useState } from "react";

type ExperienceData = {
  company: string;
  position: string;
  dateRange: string;
  description1: string;
  description2: string;
  description3: string;
  fontColor: string;
  URL: string;
};

type Props = {
  experiences: ExperienceData[];
};

const Experience = ({ experiences }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="m-auto mt-8 items-center justify-center lg:relative">
        <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px]">
          <div className="relative lg:top-24">
            <div className="relative right-[107px] top-6 mr-6 text-[12px] text-white lg:right-[117px]">
              2.
            </div>
            <div className="">Professional Experience</div>
            <div className="mx-auto mb-16 h-[1px] w-[340px] bg-[#FFFFFF] drop-shadow-md"></div>
          </div>
        </div>
      </div>
      <div className="m-auto items-center justify-center lg:relative">
        <div className="mx-auto w-[100%] lg:mt-40 lg:w-[70%]">
          <div className="relative">
            <ul
              className="relative flex list-none flex-wrap rounded-xl bg-[#393E46] p-1"
              data-tabs="tabs"
              role="list"
            >
              {experiences.map((experience, index) => (
                <li
                  key={index}
                  className="z-30 flex-auto rounded-md p-2 text-center"
                >
                  <button
                    className={`mr-[8px]flex z-30 mx-auto w-[90%] cursor-pointer flex-wrap items-center justify-center rounded-lg border border-[#00ADB5] p-2  text-white drop-shadow-xl transition-all ease-in-out lg:mx-auto ${
                      activeTab === index ? "bg-[#00ADB5] text-black" : ""
                    } hover:scale-105`}
                    data-tab-target=""
                    role="tab"
                    aria-selected={activeTab === index ? "true" : "false"}
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="mx-auto">{experience.company}</span>
                  </button>
                </li>
              ))}
            </ul>
            {experiences.map((experience, index) => {
              if (activeTab === index) {
                return (
                  <div
                    key={index}
                    className="relative bottom-10 -z-10 m-auto w-[100%] rounded-xl bg-[#393E46] p-4 text-[14px] text-white shadow-xl drop-shadow-lg"
                  >
                    <div className="mt-8 md:w-[100%] lg:relative lg:w-[100%]">
                      <div className="h-[2px] md:w-[50%] lg:relative lg:w-[100%]"></div>
                      <div className="text-center text-[28px] font-bold text-[#00ADB5]">
                        {experience.position}
                      </div>
                      <div className="relative text-center text-[28px] text-white">
                        @
                      </div>
                      <div
                        className={`relative text-center text-3xl font-normal drop-shadow-lg`}
                        style={{ color: experience.fontColor }}
                      >
                        {experience.company}
                      </div>
                      <div className="mx-auto mb-4 mt-4 h-[1px] w-[70%] bg-[#EEEEEE] text-center drop-shadow-md"></div>
                      <div className="mb-4 text-center text-[16px] font-normal text-[#EEEEEE]">
                        {experience.dateRange}
                      </div>
                      <div className="mx-auto w-[80%] text-[14px] font-normal text-[#EEEEEE]">
                        <ul className="relative">
                          <li className="mb-4 pl-2">
                            <span className="bullet-color"></span>
                            {experience.description1}
                          </li>
                          <li className="mb-4 pl-2">
                            <span className="bullet-color"></span>
                            {experience.description2}
                          </li>
                          <li className="mb-4 pl-2">
                            <span className="bullet-color"></span>
                            {experience.description3}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
