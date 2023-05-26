import React from "react";

type Props = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: string;
  githubURL: string;
  liveURL: string;
  techUsed: string[];
};

const FeaturedProjectCard = (props: Props) => {
  return (
    <div>
      <div className="relative m-auto text-[#00ADB5]">
        <div className="relative mb-1 text-[14px]">Featured Project</div>
      </div>
      <div className="relative m-auto w-[100%] rounded-xl bg-[#393E46] p-8 text-[14px] text-white shadow-xl drop-shadow-lg lg:w-[70%]">
        <div className="text-[32px] font-bold">{props.title}</div>
        <div className="grid grid-rows-1">
          {" "}
          {props.techUsed.map((tech) => {
            return (
              <div className="mx-2 inline-block rounded-md px-2 text-[12px] text-white">
                {" "}
                <img className="h-8 w-8" src={tech} alt="Skill Icons" />
              </div>
            );
          })}
        </div>
        <div className="mx-auto mb-4 mt-4 h-[1px] w-[70%] bg-[#EEEEEE] text-center drop-shadow-md"></div>
        <div className="mx-auto w-[80%] text-[14px] font-normal text-[#EEEEEE]">
          <ul className="relative">
            <li className="mb-4 pl-2">
              <span className="bullet-color"></span>
              {props.description1}
            </li>
            <li className="mb-4 pl-2">
              <span className="bullet-color"></span>
              {props.description2}
            </li>
            <li className="mb-4 pl-2">
              <span className="bullet-color"></span>
              {props.description3}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
