import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#222831]">
      <div className="flex items-center justify-between bg-transparent p-4">
        {!isDesktop && (
          <div className="text-white">
            <button
              className="fixed right-8 top-8 text-white  focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
        )}
        {(isDesktop || isOpen) && (
          <div
            className={`${
              isDesktop ? "flex" : "fixed bottom-0 right-0 top-0"
            } w-64 bg-[#222831] transition-transform duration-300`}
            style={{
              transform: isDesktop
                ? "none"
                : isOpen
                ? "translateX(0)"
                : "translateX(100%)",
            }}
          >
            {isDesktop ? (
              <>
                <ul className="text-md fixed right-16 top-6 flex space-x-4 font-medium text-[#00ADB5]">
                  <li className="relative top-[6px] flex">
                    <div className="px-[5px] text-[12px] text-white">1.</div>
                    <a href="#about">About</a>
                  </li>
                  <li className="relative top-[6px] flex ">
                    <div className="px-[5px] text-[12px] text-white">2.</div>
                    <a href="#experience">Experience</a>
                  </li>
                  <li className="relative top-[6px] flex">
                    <div className="px-[5px] text-[12px] text-white">3.</div>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="relative top-[6px]  flex">
                    <div className="px-[5px] text-[12px] text-white">4.</div>
                    <a href="#contact">Contact</a>
                  </li>{" "}
                  <button className="relative rounded-lg border border-[#00ADB5] bg-[#222831] px-4 py-2 text-sm font-medium text-white">
                    Resume
                  </button>
                </ul>{" "}
              </>
            ) : (
              <>
                <button
                  className="fixed right-8 top-8 text-white focus:outline-none"
                  onClick={toggleMenu}
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
                <ul className="text-md mt-[50%] flex flex-col items-center text-center font-medium text-[#00ADB5]">
                  <li className="relative top-[6px] mb-2 flex">
                    <div className="px-[5px] text-[12px] text-white">1.</div>
                    <a href="#about">About</a>
                  </li>
                  <li className="relative top-[6px] mb-2 flex">
                    <div className="px-[5px] text-[12px] text-white">2.</div>
                    <a href="#experience">Experience</a>
                  </li>
                  <li className="relative top-[6px] mb-2 flex">
                    <div className="px-[5px] text-[12px] text-white">3.</div>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="relative top-[6px] mb-2 flex">
                    <div className="px-[5px] text-[12px] text-white">4.</div>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>

                <div className="mt-4 flex items-center justify-center">
                  <button className="rounded-lg bg-[#00ADB5] px-6 py-2 text-sm font-medium text-white">
                    Resume
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;