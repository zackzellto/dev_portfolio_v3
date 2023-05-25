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
      <div className="m-auto items-center justify-center lg:relative">
        <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px]">
          <div className="relative lg:top-24 lg:mr-[54%]">
            <div className="lg:mr-33 relative right-[107px] top-6 mr-6 text-[12px] text-white lg:right-[120px]">
              2.
            </div>
            <div className="">Professional Experience</div>
            <div className="mx-auto mb-8 h-[1px] w-[70%] bg-[#FFFFFF] text-center drop-shadow-md"></div>
          </div>
        </div>
      </div>
      <div className="m-auto items-center justify-center lg:relative">
        <div className="w-[100%] ">
          <div className="relative right-0">
            <ul
              className="relative flex list-none flex-wrap rounded-xl bg-[#393E46] p-1"
              data-tabs="tabs"
              role="list"
            >
              {experiences.map((experience, index) => (
                <li key={index} className="z-30 flex-auto text-center">
                  <a
                    className={`z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 px-0 py-1 text-white transition-all ease-in-out ${
                      activeTab === index
                        ? "translate-y-[-1px] transform text-[#00ADB5] "
                        : ""
                    }`}
                    data-tab-target=""
                    role="tab"
                    aria-selected={activeTab === index ? "true" : "false"}
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="ml-1">{experience.company}</span>
                  </a>
                </li>
              ))}
            </ul>
            {experiences.map((experience, index) => {
              if (activeTab === index) {
                return (
                  <div
                    key={index}
                    className="relative bottom-10 -z-10 m-auto w-[100%] rounded-xl bg-[#393E46] p-4 text-[14px] text-white shadow-xl drop-shadow-lg lg:top-48 lg:mr-[340px] lg:w-[60%] lg:max-w-[1000px] lg:px-32 xl:mr-[29%]"
                  >
                    <div className="mt-8 md:w-[100%] lg:relative lg:left-8 lg:w-[100%]">
                      <div className="h-[2px] md:w-[50%] lg:relative lg:left-24 lg:w-[100%]"></div>
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
