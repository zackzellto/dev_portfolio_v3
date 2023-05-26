import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px] ">
        <div className="relative top-8 lg:top-64 lg:ml-[54%]">
          <div className="relative right-14 top-6 mr-6 text-[12px] text-white lg:right-16 ">
            3.
          </div>
          <div className="">My Portfolio</div>

          <div className="mx-auto h-[1px] w-[340px] bg-[#FFFFFF] drop-shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;