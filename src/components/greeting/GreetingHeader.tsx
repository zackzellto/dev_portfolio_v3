import { useEffect, useState } from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitterSquare,
  FaCodepen,
} from "react-icons/fa";

type Props = {};

const GreetingHeader = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-8 lg:mt-32">
      <div className="mt-2 text-left text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[24px] ">
        <div className="relative top-14">
          {isMobile ? "Hey! I'm" : "Hi, my name is,"}{" "}
        </div>
        <br />
        <div className="text-[58px] font-bold text-[#EEEEEE] drop-shadow-md md:text-[64px] lg:text-[80px]">
          Zack Zellto{" "}
          <div className="relative bottom-6  text-[18px] text-[#00ADB5] drop-shadow-md lg:text-[24px] ">
            a Software Engineer with a creative eye.
          </div>
        </div>{" "}
        <div className="mx-auto text-[14px] text-white drop-shadow-md md:w-[80%] md:text-center lg:mb-8 lg:text-[18px]">
          I’m a results-driven person who specializes in problem solving and
          applies solutions through exceptional applications that improve the
          lives of others.
        </div>{" "}
      </div>
      <div className="relative right-[35%] top-8 flex h-[1px] w-[30%] bg-[#00ADB5] drop-shadow-md md:right-8 md:w-[35%] lg:right-[10%] ">
        {" "}
        <div className="hidden md:relative md:left-[100%] md:top-[-16px] md:flex">
          <a href="" className="mx-2">
            <FaGithubAlt className="h-6 w-6 text-[#FFFFFF] transition-colors duration-300 hover:text-[#00ADB5]" />
          </a>
          <a href="" className="mx-2">
            <FaLinkedinIn className="h-6 w-6 text-[#FFFFFF] transition-colors duration-300 hover:text-[#00ADB5]" />
          </a>
          <a href="" className="mx-2">
            <FaTwitterSquare className="h-6 w-6 text-[#FFFFFF] transition-colors duration-300 hover:text-[#00ADB5]" />
          </a>
          <a href="" className="mx-2">
            <FaCodepen className="h-6 w-6 text-[#FFFFFF] transition-colors duration-300 hover:text-[#00ADB5]" />
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default GreetingHeader;
