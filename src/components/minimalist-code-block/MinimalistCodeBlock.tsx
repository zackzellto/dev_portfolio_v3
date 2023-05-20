// import React, { useEffect, useState } from "react";

// type Props = {};

// const MinimalistCodeBlock = (props: Props) => {
//   const [activeDiv, setActiveDiv] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveDiv((prev) => prev + 1);
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   const divsData = [
//     { maxWidth: "50vw", color: "#C2CC4C", marginTop: "2vh", marginLeft: "2vw" },
//     { maxWidth: 235, color: "#C2CC4C", marginTop: 8, marginLeft: 8 },
//     { maxWidth: 181, color: "#C2CC4C", marginTop: 8, marginLeft: 8 },
//     { maxWidth: 300, color: "#4ECC4C", marginTop: 32, marginLeft: 8 },
//     { maxWidth: 24, color: "#4939FF", marginTop: -8, marginLeft: 320 },
//     { maxWidth: 195, color: "#EA2AD7", marginTop: 8, marginLeft: 24 },
//     { maxWidth: 195, color: "#FFFFFF", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 245, color: "#FFFFFF", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 170, color: "#FF0000", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 24, color: "#4939FF", marginTop: 8, marginLeft: 8 },
//     { maxWidth: 140, color: "#4CCCCC", marginTop: 24, marginLeft: 8 },
//     { maxWidth: 24, color: "#4ECC4C", marginTop: -8, marginLeft: 160 },
//     { maxWidth: 45, color: "#FF0000", marginTop: 8, marginLeft: 24 },
//     { maxWidth: 24, color: "#9C2CE0", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 350, color: "#FFFFFF", marginTop: 8, marginLeft: 48 },
//     { maxWidth: 280, color: "#FFFFFF", marginTop: 8, marginLeft: 48 },
//     { maxWidth: 450, color: "#FFFFFF", marginTop: 8, marginLeft: 48 },
//     { maxWidth: 24, color: "#9C2CE0", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 24, color: "#9C2CE0", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 56, color: "#E0622C", marginTop: 8, marginLeft: 48 },
//     { maxWidth: 250, color: "#FFFFFF", marginTop: -8, marginLeft: 120 },
//     { maxWidth: 56, color: "#E0622C", marginTop: -8, marginLeft: 385 },
//     { maxWidth: 24, color: "#9C2CE0", marginTop: 8, marginLeft: 36 },
//     { maxWidth: 45, color: "#FF0000", marginTop: 8, marginLeft: 24 },
//     { maxWidth: 24, color: "#4ECC4C", marginTop: 8, marginLeft: 8 },
//     { maxWidth: 48, color: "#03A4FF", marginTop: 32, marginLeft: 8 },
//     { maxWidth: 72, color: "#4ECC4C", marginTop: -8, marginLeft: 70 },
//     { maxWidth: 240, color: "#EA2AD7", marginTop: -8, marginLeft: 160 },
//   ];

//   return (
//     <div className="mt-10 rounded-xl bg-[#393E46] p-8">
//       <div className="h-[450px] w-[435px] rounded-lg px-4 py-4 drop-shadow-lg ">
//         {divsData.map((divData, index) => (
//           <div
//             key={index}
//             className={`animated-div h-2 rounded-xl ${
//               activeDiv > index ? "visible" : ""
//             }`}
//             style={{
//               backgroundColor: divData.color,
//               maxWidth: `${divData.maxWidth}px`,
//               transitionDelay: `${index * 0.5}s`,
//               marginTop: `${divData.marginTop}px`,
//               marginLeft: `${divData.marginLeft}px`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MinimalistCodeBlock;

import React, { useEffect, useState } from "react";

type Props = {};

const MinimalistCodeBlock = (props: Props) => {
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDiv((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const divsData = [
    {
      maxWidth: "22.24vw",
      color: "#C2CC4C",
      marginTop: "-2.74vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "15.24vw",
      color: "#C2CC4C",
      marginTop: "0.74vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "25.43vw",
      color: "#C2CC4C",
      marginTop: "0.74vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "35.63vw",
      color: "#4ECC4C",
      marginTop: "2.96vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "4.25vw",
      color: "#4939FF",
      marginTop: "-.8vh",
      marginLeft: "40vw",
    },
    {
      maxWidth: "15.16vw",
      color: "#EA2AD7",
      marginTop: "1.5vh",
      marginLeft: "3.25vw",
    },
    {
      maxWidth: "30.16vw",
      color: "#FFFFFF",
      marginTop: "1.5vh",
      marginLeft: "4.88vw",
    },
    {
      maxWidth: "22.76vw",
      color: "#FFFFFF",
      marginTop: "1.5vh",
      marginLeft: "4.88vw",
    },
    {
      maxWidth: "18.85vw",
      color: "#FF0000",
      marginTop: "1.5vh",
      marginLeft: "4.88vw",
    },
    {
      maxWidth: "4.25vw",
      color: "#4939FF",
      marginTop: "1.5vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "25.29vw",
      color: "#4CCCCC",
      marginTop: "3.22vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "4.25vw",
      color: "#4ECC4C",
      marginTop: "-.8vh",
      marginLeft: "27.33vw",
    },
    {
      maxWidth: "10.34vw",
      color: "#FF0000",
      marginTop: "1.5vh",
      marginLeft: "1.25vw",
    },
    {
      maxWidth: "6.25vw",
      color: "#9C2CE0",
      marginTop: "1.5vh",
      marginLeft: "1.88vw",
    },
    {
      maxWidth: "18.23vw",
      color: "#FFFFFF",
      marginTop: "1.5vh",
      marginLeft: "3.50vw",
    },
    {
      maxWidth: "14.58vw",
      color: "#FFFFFF",
      marginTop: "1.5vh",
      marginLeft: "3.50vw",
    },
    {
      maxWidth: "23.44vw",
      color: "#FFFFFF",
      marginTop: "1.5vh",
      marginLeft: "3.50vw",
    },
    {
      maxWidth: "6.25vw",
      color: "#9C2CE0",
      marginTop: "1.5vh",
      marginLeft: "1.88vw",
    },
    {
      maxWidth: "6.25vw",
      color: "#9C2CE0",
      marginTop: "1.5vh",
      marginLeft: "1.88vw",
    },
    {
      maxWidth: "7.92vw",
      color: "#E0622C",
      marginTop: "1.5vh",
      marginLeft: "2.50vw",
    },
    {
      maxWidth: "33.02vw",
      color: "#FFFFFF",
      marginTop: "-0.95vh",
      marginLeft: "12.25vw",
    },
    {
      maxWidth: "7.92vw",
      color: "#E0622C",
      marginTop: "-0.95vh",
      marginLeft: "47.5vw",
    },
    {
      maxWidth: "6.25vw",
      color: "#9C2CE0",
      marginTop: "1.5vh",
      marginLeft: "1.88vw",
    },
    {
      maxWidth: "10.34vw",
      color: "#FF0000",
      marginTop: "1.5vh",
      marginLeft: "1.25vw",
    },
    {
      maxWidth: "4.25vw",
      color: "#4ECC4C",
      marginTop: "1.5vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "12.50vw",
      color: "#03A4FF",
      marginTop: "2.96vh",
      marginLeft: "0.42vw",
    },
    {
      maxWidth: "8.75vw",
      color: "#4ECC4C",
      marginTop: "-0.9vh",
      marginLeft: "14.65vw",
    },
    {
      maxWidth: "35.50vw",
      color: "#EA2AD7",
      marginTop: "-0.95vh",
      marginLeft: "25.33vw",
    },
  ];

  return (
    <div
      className="mt-10 rounded-xl bg-[#393E46] p-8"
      style={{ maxWidth: "100%" }}
    >
      <div className="h-[50vh] w-[90vw] rounded-lg px-4 py-4 drop-shadow-lg ">
        {divsData.map((divData, index) => (
          <div
            key={index}
            className={`animated-div h-2 rounded-xl ${
              activeDiv > index ? "visible" : ""
            }`}
            style={{
              backgroundColor: divData.color,
              maxWidth: divData.maxWidth,
              transitionDelay: `${index * 0.5}s`,
              marginTop: divData.marginTop,
              marginLeft: divData.marginLeft,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MinimalistCodeBlock;
