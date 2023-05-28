import React, { useState } from "react";
import GitHubLogo from "../../assets/github-logo.png";
import ExternalLink from "../../assets/external-link.png";

type Props = {
  icon: string;
  title: string;
  description: string;
  viewProject: string;
  viewCode: string;
  techUsed: string[];
};

const RegularProjectsCard = (props: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="">
      <div className="mt-16">
        <div className="flex flex-wrap justify-center">
          <div className="relative  m-auto w-[320px] rounded-xl bg-[#393E46] p-8 text-[14px] text-white shadow-xl drop-shadow-lg">
            <img
              className=" mx-auto mb-4 transform shadow-xl transition-all duration-300 hover:scale-105 sm:block sm:w-3/4 sm:justify-center sm:overflow-hidden sm:opacity-30 sm:hover:opacity-100 md:w-[60%]"
              src={props.icon}
              alt="project icon"
            />
            <div className=" text-white drop-shadow-lg ">
              <div className="mb-2 text-[2.5rem] font-bold text-[#00ADB5]">
                {props.title}
              </div>

              <ul className="relative">
                <li className="mb-4 pl-2">
                  <span className="bullet-color"></span>
                  {props.description}
                </li>
              </ul>
            </div>
            <div className="mb-2 text-center text-[14px] font-normal text-[#EEEEEE] underline">
              Built with:{" "}
              <div className="flex items-center justify-center ">
                {props.techUsed.map((tech) => (
                  <div className="mr-1 inline-block rounded-md text-end text-[12px] text-white">
                    <img
                      className="mb-4 mt-2 h-5 w-5 md:h-6 md:w-6"
                      src={tech}
                      alt="Skill Icons"
                    />
                  </div>
                ))}
              </div>
              <div className="-mb-7 mt-4 flex items-center justify-center gap-x-4 text-center drop-shadow-md">
                <a
                  href={props.viewCode}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <img
                    className="relative flex h-6 w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
                    src={GitHubLogo}
                    alt="GitHub Repo"
                  />
                </a>
                <a
                  className="relative flex cursor-pointer"
                  href={props.viewProject}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="relative flex h-7 w-7 cursor-pointer transition-transform duration-300 hover:scale-110"
                    src={ExternalLink}
                    alt="Live Site"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularProjectsCard;
