import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center justify-center">
      <div className="text-left text-[18px] font-bold text-[#00ADB5] drop-shadow-md">
        <div className="relative top-14">
          {isMobile ? "Hey! I'm" : "Hi, my name is,"}{" "}
        </div>
        <br />
        <div className="text-[58px] font-bold text-[#EEEEEE] drop-shadow-md">
          Zack Zellto{" "}
          <div className="relative bottom-6 text-[18px] text-[#00ADB5] drop-shadow-md">
            a Software Engineer with a creative eye.
          </div>
        </div>{" "}
        <div className="text-[14px] text-white drop-shadow-md">
          I’m a results-driven person who specializes in problem solving and
          applies solutions through exceptional applications that improve the
          lives of others.
        </div>{" "}
      </div>
      <div className="relative top-8 h-[1px] w-[300px] bg-[#00ADB5] drop-shadow-md"></div>
      <br />
    </div>
  );
};

export default GreetingHeader;
