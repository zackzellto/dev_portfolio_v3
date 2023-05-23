import { useState } from "react";
import "./index.css";
import GreetingHeader from "./components/greeting/GreetingHeader";
import Navbar from "./components/navbar/Navbar";
import MinimalistCodeBlock from "./components/minimalist-code-block/MinimalistCodeBlock";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-2xl drop-shadow-lg lg:mt-24">
        <div className="items-center justify-center p-8">
          <div className="lg:grid lg:grid-cols-2 ">
            <div>
              <GreetingHeader />
            </div>

            <div>
              <MinimalistCodeBlock />
            </div>
          </div>
          <br />
          <div className="text-center lg:mx-auto lg:-mb-48 lg:mt-40 lg:h-[1px] lg:w-[75%] lg:bg-[#FFFFFF] lg:drop-shadow-md"></div>
          <div>
            <AboutMe />
          </div>
          <br />{" "}
          <div>
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
