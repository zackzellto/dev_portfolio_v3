import React from "react";
import ZackPic from "../../assets/zackpic.png";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="m-auto items-center justify-center">
      <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px] ">
        <div className="relative top-8">
          <div className="relative right-14 top-6 text-[12px] text-white lg:right-[60px]">
            1.
          </div>
          <div className="">About Me</div>
          <div className="mx-auto h-[1px] w-[340px] bg-[#FFFFFF] drop-shadow-md"></div>
        </div>
      </div>
      <br />
      <div className="relative bottom-16 -z-10 m-auto w-[100%] rounded-xl bg-[#393E46] p-4 text-white shadow-xl drop-shadow-lg md:p-8 lg:-right-48 lg:w-[60%] lg:px-32 lg:text-[12px]">
        <div className=" relative z-30 mx-auto h-[177px] w-[199px] rounded-lg bg-[#00ADB5] sm:h-[220px] sm:w-[250px] md:left-[200px] md:top-48 md:mb-8 md:h-[278px] md:w-[310px] lg:top-16  lg:w-[400px]">
          <img
            className=" mx-auto  flex opacity-40 shadow-xl hover:opacity-100 md:mt-0"
            src={ZackPic}
            alt="Zack Picture"
          />
        </div>{" "}
        <div className="indent-8 md:w-[50%] lg:relative lg:left-16 lg:w-[100%]">
          {" "}
          Hello! I’m Zack and I have a deep rooted passion for problem solving.
          I didn’t have the resources to go to college when I was younger, so I
          decided to teach myself everything I know! From building computers to
          building software, I’ve done it all.
        </div>
        <br />
        <div className=" indent-8 lg:relative lg:left-16">
          I’m an extremely headstrong person who has achieved success from hard
          work, dedication and persistence. I’m also a knowledge advocate that
          firmly believes that everyone can be a better version of themselves by
          teaching themselves a new skill. Especially in the information-age we
          live in. I am currently writing a book titled, “The Self-Taught
          Mindset” that reflects my position on seeking knowledge.
        </div>
        <br />
        <div className=" indent-8 lg:relative lg:left-16">
          What made me get into Software Engineering was the ability to create a
          product or service from my own thoughts and it have the ability to
          reach millions of people with the click of a button. That is some
          powerful stuff.
        </div>
        <br />
        <div className="lg:relative lg:-left-16">
          <div>Here are some technologies I am proficient with:</div>{" "}
        </div>
        <br />
      </div>
    </div>
  );
};

export default AboutMe;
