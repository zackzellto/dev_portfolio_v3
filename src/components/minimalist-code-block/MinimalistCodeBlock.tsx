import React, { useEffect, useState } from "react";

type Props = {};

const MinimalistCodeBlock = (props: Props) => {
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDiv((prev) => prev + 1);
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const divsData = [
    {
      width: "0px",
      maxWidth: "25%",
      color: "#C2CC4C",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "37%",
      color: "#C2CC4C",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "20%",
      color: "#C2CC4C",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "40%",
      color: "#4ECC4C",
      marginTop: "40px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "5%",
      color: "#4939FF",
      marginTop: "-8px",
      marginLeft: "45%",
    },
    {
      width: "0px",
      maxWidth: "15%",
      color: "#EA2AD7",
      marginTop: "10px",
      marginLeft: "6%",
    },
    {
      width: "0px",
      maxWidth: "50%",
      color: "#FFFFFF",
      marginTop: "10px",
      marginLeft: "10%",
    },
    {
      width: "0px",
      maxWidth: "42%",
      color: "#FFFFFF",
      marginTop: "10px",
      marginLeft: "10%",
    },
    {
      width: "0px",
      maxWidth: "37%",
      color: "#FF0000",
      marginTop: "10px",
      marginLeft: "8%",
    },
    {
      width: "0px",
      maxWidth: "5%",
      color: "#4939FF",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "35%",
      color: "#4CCCCC",
      marginTop: "28px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "5%",
      color: "#4ECC4C",
      marginTop: "-8px",
      marginLeft: "40%",
    },
    {
      width: "0px",
      maxWidth: "17%",
      color: "#FF0000",
      marginTop: "10px",
      marginLeft: "6%",
    },
    {
      width: "0px",
      maxWidth: "10%",
      color: "#9C2CE0",
      marginTop: "10px",
      marginLeft: "10%",
    },
    {
      width: "0px",
      maxWidth: "13%",
      color: "#FFFFFF",
      marginTop: "10px",
      marginLeft: "12%",
    },
    {
      width: "0px",
      maxWidth: "33%",
      color: "#FFFFFF",
      marginTop: "10px",
      marginLeft: "12%",
    },
    {
      width: "0px",
      maxWidth: "45%",
      color: "#03A4FF",
      marginTop: "10px",
      marginLeft: "11%",
    },
    {
      width: "0px",
      maxWidth: "10%",
      color: "#9C2CE0",
      marginTop: "10px",
      marginLeft: "10%",
    },
    {
      width: "0px",
      maxWidth: "5%",
      color: "#4ECC4C",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "15%",
      color: "#E0622C",
      marginTop: "10px",
      marginLeft: "8%",
    },
    {
      width: "0px",
      maxWidth: "45%",
      color: "#FFFFFF",
      marginTop: "-8px",
      marginLeft: "25%",
    },
    {
      width: "0px",
      maxWidth: "15%",
      color: "#E0622C",
      marginTop: "-8px",
      marginLeft: "72%",
    },
    {
      width: "0px",
      maxWidth: "8%",
      color: "#9C2CE0",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "25%",
      color: "#FF0000",
      marginTop: "10px",
      marginLeft: "6%",
    },
    {
      width: "0px",
      maxWidth: "8%",
      color: "#9C2CE0",
      marginTop: "10px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "16%",
      color: "#4ECC4C",
      marginTop: "30px",
      marginLeft: "2%",
    },
    {
      width: "0px",
      maxWidth: "60%",
      color: "#FFFFFF",
      marginTop: "-8px",
      marginLeft: "20%",
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-sm">
      <div className="mt-10 rounded-xl bg-[#393E46] ">
        <div className=" max-w-screen-sm rounded-lg px-4 py-4 drop-shadow-lg">
          {divsData.map((divData, index) => (
            <div
              key={index}
              className={`animated-div h-2 w-1/4   rounded-xl md:w-1/2 lg:w-3/4 ${
                activeDiv > index ? "visible" : ""
              }`}
              style={{
                backgroundColor: divData.color,
                maxWidth: divData.maxWidth,
                transitionDelay: `${index * 0.5}s`,
                marginTop: divData.marginTop,
                marginLeft: divData.marginLeft,
                width: divData.width,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinimalistCodeBlock;
