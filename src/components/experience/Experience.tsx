import React from "react";

type Props = {
  company: string;
  position: string;
  dateRange: string;
  description1: string;
  description2: string;
  description3: string;
  fontColor: string;
  URL: string;
};

const Experience = (props: Props) => {
  const fontColor = props.fontColor;
  const URL = props.URL;

  return (
    <>
      <div className="m-auto items-center justify-center lg:relative ">
        <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px] ">
          <div className="relative lg:top-24 lg:mr-[54%]">
            <div className="lg:mr-33 relative right-[107px] top-6 mr-6 text-[12px] text-white lg:right-[120px] ">
              2.
            </div>
            <div className="">Professional Experience</div>

            <div className="mx-auto h-[1px] w-[70%] bg-[#FFFFFF] text-center drop-shadow-md"></div>
          </div>{" "}
        </div>
      </div>
      <div className="relative  top-24 -z-10 m-auto w-[100%] rounded-xl bg-[#393E46] p-4 text-[14px] text-white shadow-xl drop-shadow-lg lg:top-48 lg:mr-[340px] lg:w-[60%] lg:max-w-[1000px] lg:px-32 xl:mr-[29%]">
        <div className="mt-8 md:w-[50%] lg:relative lg:left-8 lg:w-[100%]">
          <div className="h-[2px] md:w-[50%] lg:relative lg:left-24 lg:w-[100%]"></div>
          <div className=" text-center text-[28px] font-bold text-[#00ADB5]">
            {props.position}
          </div>
          <div className=" relative text-center text-[28px] text-white">@</div>

          <div
            className={`relative text-center ${fontColor} text-3xl font-normal`}
          >
            {props.company}
          </div>

          <div className="mx-auto mb-4 mt-4 h-[1px] w-[70%] bg-[#EEEEEE] text-center drop-shadow-md"></div>
          <div className="mb-4 text-center text-[16px] font-normal text-[#EEEEEE]">
            {props.dateRange}
          </div>

          <div className="mx-auto w-[80%] text-[14px] font-normal text-[#EEEEEE]">
            <ul className="relative">
              <li className="pl-2">
                <span className="bullet-color"></span>
                {props.description1}
              </li>
              <li className="pl-2">
                <span className="bullet-color"></span>
                {props.description2}
              </li>
              <li className="pl-2">
                <span className="bullet-color"></span>
                {props.description3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
