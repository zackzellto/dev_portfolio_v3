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
          <div className="text-center lg:mx-auto lg:-mb-48 lg:mt-40 lg:h-[1px] lg:w-[95%] lg:bg-[#FFFFFF] lg:drop-shadow-md"></div>
          <div>
            <AboutMe />
          </div>{" "}
          <div className="text-center sm:-mb-8 md:-mb-32 lg:mx-auto lg:-mb-16 lg:h-[1px] lg:w-[95%] lg:bg-[#FFFFFF] lg:drop-shadow-md"></div>
          <br />{" "}
          <div>
            <Experience
              company="Intel"
              position="Senior IT Engineer"
              dateRange="March 2016 - December 2021"
              description1="Lead the IT integration & support team for all hardware & software
              on state-of-the-art replay systems used in all major sporting events."
              description2="Created a remote support model for live events saving the organization
              over $100,000+ a year on travel and lodging related expenses."
              description3="Solved high-level technical issues that helped lead to successful 
              partnerships with major brands."
              fontColor="text-[#0071c5]"
              URL="https://www.intel.com/content/www/us/en/homepage.html"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
