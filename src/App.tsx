import { useState } from "react";
import "./index.css";
import GreetingHeader from "./components/greeting/GreetingHeader";
import Navbar from "./components/navbar/Navbar";
import MinimalistCodeBlock from "./components/minimalist-code-block/MinimalistCodeBlock";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience/Experience";
import TuffShedLogo from "./assets/tuffshed-logo.png";
import IntelLogo from "./assets/intel-logo.png";
import QRailsLogo from "./assets/qrails-logo.png";
import ReplayLogo from "./assets/replay-logo.png";

const experiences = [
  {
    company: "QRails",
    position: "Frontend Developer",
    dateRange: "October 2022 - January 2023",
    description1:
      "Utilized React and GraphQL to implement new UI improvements to enhance the user experience and increase user engagement",
    description2:
      "Developed multiple features for a financial wellness platform prioritizing Earned Wage Access (EWA) for companies to adopt and provide to their employees",
    description3:
      "Collaborated with cross-functional teams to implement a new analytics solution, resulting in a significant improvement in user experience and an increase in conversion rate.",
    fontColor: "#7876F8",
    URL: "www.qrails.com",
  },
  {
    company: "Tuff Shed",
    position: "Full Stack Software Developer",
    dateRange: "July 2022 - September 2022",
    description1:
      "Worked with React, ASP.NET, C#, and various libraries to develop web-based solutions.",
    description2:
      "Developed an API solution that reduced customer drop-off rate by 65% and decreased customer-service call times.",
    description3:
      "Utilized Salesforce and additional microservices to develop solutions for internal tooling and utility, resulting in significant improvements in operational efficiency.",
    fontColor: "#9A2E30",
    URL: "www.tuffshed.com",
  },
  {
    company: "Intel",
    position: "Senior IT Engineer",
    dateRange: "March 2016 - December 2021",
    description1:
      "Lead the IT integration & support team for all hardware & software on state-of-the-art replay systems used in all major sporting events.",
    description2:
      "Created a remote support model for live events saving the organization over $100,000+ a year on travel and lodging related expenses.",
    description3:
      "Solved high-level technical issues that helped lead to successful partnerships with major brands. ",
    fontColor: "#0071c5",
    URL: "www.intel.com",
  },
  {
    company: "Replay Technologies",
    position: "IT Operations Lead",
    dateRange: "January 2014 - February 2016",
    description1:
      "Was responsible for all IT operations within the United States as well as, all live events. Including implementing failover systems, network security, and remote support. ",
    description2:
      "Assisted in the development of a new generation of a 360-degree camera replay system that lead to winning an Emmy Award.",
    description3:
      "Lead a team of three technicians that assisted in building and installing all hardware and software related items .",
    fontColor: "#F6AD57",
    URL: "www.freed.com",
  },
];

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
          </div>
          <div className="text-center sm:-mb-8 md:-mb-32 lg:mx-auto lg:-mb-16 lg:h-[1px] lg:w-[95%] lg:bg-[#FFFFFF] lg:drop-shadow-md"></div>
          <br />
          <div>
            <Experience experiences={experiences} />
          </div>
          <br />
          <div className="mx-auto h-[1px] w-[340px] bg-[#FFFFFF] drop-shadow-md"></div>
        </div>
      </div>
    </>
  );
}

export default App;
