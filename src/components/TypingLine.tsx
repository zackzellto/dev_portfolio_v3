import React, { useLayoutEffect, useState } from "react";

const TypingLine = () => {
  const [width, setWidth] = useState(5); // Set initial width to 5px

  useLayoutEffect(() => {
    const typingAnimation = setInterval(() => {
      setWidth((prevWidth) => prevWidth + 1); // Adjust the increment as desired
    }, 100); // Adjust the interval duration as desired

    return () => {
      clearInterval(typingAnimation);
    };
  }, []);

  return (
    <div className="ml-8 mt-4 h-2 rounded-xl bg-[#9C2CE0]">
      <div
        className="transition-width bg-[#9C2CE0] duration-300"
        style={{ width: `${width}px` }}
      ></div>
    </div>
  );
};

export default TypingLine;
