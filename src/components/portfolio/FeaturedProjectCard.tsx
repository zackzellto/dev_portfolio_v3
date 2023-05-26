import React from "react";
import GitHubLogo from "../../assets/github-logo.png";
import ExternalLink from "../../assets/external-link.png";

type Props = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: string;
  fontFamily: string;
  githubURL: string;
  liveURL: string;
  techUsed: string[];
};

const FeaturedProjectCard = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="relative m-auto text-[#00ADB5]">
        <div className="relative mb-1 text-[14px]">Featured Project</div>
      </div>
      <div className="relative m-auto w-[100%] rounded-xl bg-[#393E46] p-8 text-[14px] text-white shadow-xl drop-shadow-lg lg:w-[50%]">
        <div className="flex items-center justify-center">
          <div className="rounded-xl bg-[#4FEEC8]">
            {" "}
            <div
              className={`mb-8 text-center text-[64px] font-bold ${props.fontFamily}`}
            >
              {props.title}
            </div>
            <img
              className="w-[100%] overflow-hidden opacity-30 hover:opacity-100"
              src={props.image}
              alt="project image"
            />
          </div>
        </div>

        <div className="text-center text-[14px] font-normal text-[#EEEEEE] underline">
          Built with:
        </div>
        <div className="flex items-center justify-center ">
          {props.techUsed.map((tech) => (
            <div className="mr-1 inline-block rounded-md text-end text-[12px] text-white">
              <img className="mt-2 h-10 w-10" src={tech} alt="Skill Icons" />
            </div>
          ))}
        </div>

        <div className="mx-auto mb-4 mt-8 h-[1px] w-[70%] bg-[#00ADB5] text-center drop-shadow-md"></div>
        <div className="mx-auto  w-[80%] text-[14px] font-normal text-[#EEEEEE]">
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
        <div className="mt-8 flex items-center justify-center gap-x-4 text-center drop-shadow-md">
          <a
            href={props.githubURL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <img
              className="relative flex cursor-pointer px-4"
              src={GitHubLogo}
              alt="GitHub Repo"
            />
          </a>
          <a
            className="relative flex cursor-pointer px-4"
            href={props.liveURL}
            target="_blank"
            rel="noreferrer"
          >
            <img src={ExternalLink} alt="Live Site" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
