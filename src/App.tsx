import { useState } from "react";
import "./index.css";
import GreetingHeader from "./components/greeting/GreetingHeader";
import Navbar from "./components/navbar/Navbar";
import MinimalistCodeBlock from "./components/minimalist-code-block/MinimalistCodeBlock";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience/Experience";
import ReactLogo from "./assets/icons/react-logo.png";
import TailwindCSSLogo from "./assets/icons/tailwindcss-logo.png";
import TypeScriptLogo from "./assets/icons/typescript-logo.png";
import PythonLogo from "./assets/icons/python-logo.png";
import MongoDBLogo from "./assets/icons/mongodb-logo.png";
import FlaskLogo from "./assets/icons/flask-logo.png";
import JavaScriptLogo from "./assets/icons/javascript-logo.png";
import NodeJSLogo from "./assets/icons/nodejs-logo.png";
import PostgreSQLLogo from "./assets/icons/postgresql-logo.png";
import BootstrapLogo from "./assets/icons/bootstrap-logo.png";
import CSSLogo from "./assets/icons/css-logo.png";
import GitLogo from "./assets/icons/git-logo.png";
import HTMLLogo from "./assets/icons/html-logo.png";
import GoogleLogo from "./assets/icons/google-logo.png";
import DockerIcon from "./assets/icons/docker-logo.png";
import GimpLogo from "./assets/icons/gimp-logo.png";
import FeaturedProjectCard from "./components/portfolio/FeaturedProjectCard";
import Jarvis from "./assets/jarvis-img.png";
import WoodenHand from "./assets/woodhand-mock.png";
import RegularProjectsCard from "./components/portfolio/RegularProjectCard";
import { FaRegFileAlt } from "react-icons/fa";

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
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

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
          <div className="text-center sm:-mb-8 md:-mb-32 lg:mx-auto lg:-mb-16 lg:h-[1px] lg:w-[95%] lg:bg-[#FFFFFF] lg:drop-shadow-md"></div>
          <div className="text-center text-[18px] font-bold text-[#00ADB5] drop-shadow-md md:text-center lg:text-center lg:text-[20px] ">
            <div className="relative mb-16">
              <div className="relative right-14 top-6 mr-6 mt-24 text-[12px] text-white lg:right-16 ">
                3.
              </div>
              <div className="">My Portfolio</div>

              <div className="mx-auto h-[1px] w-[340px] bg-[#FFFFFF] drop-shadow-md"></div>
            </div>
          </div>{" "}
          <br />
          <div className="">
            <FeaturedProjectCard
              title={"fmly"}
              description1={
                "fmly is an application that enables families to utilize technology to keep a household running smoothly."
              }
              description2={
                "From general to-do’s to a fully interactive gamified chore system, fmly will help households run more efficiently. With it’s integrated calendar fmly will provide reminders and notifications to stay on top of things at home."
              }
              description3={
                "Also, fmly has a premium feature that will allow you to keep track of family members via GPS, so you will know where they are in case of any emergencies."
              }
              image={WoodenHand}
              fontFamily=""
              githubURL={"https://github.com/zackzellto/fmly-landing-pg"}
              liveURL={"https://fmlyapp-landing-page.netlify.app/"}
              techUsed={[
                ReactLogo,
                TailwindCSSLogo,
                TypeScriptLogo,
                PythonLogo,
                FlaskLogo,
                MongoDBLogo,
              ]}
            />
          </div>
          <div className="">
            <FeaturedProjectCard
              title={"J.A.R.V.I.S"}
              description1={
                "J.A.R.V.I.S or Just A Rather Very Intelligent System consumes the OpenAI API to be able to interact with various models that are available!"
              }
              description2={
                "The application is still in it’s MVP phase, but eventually it will have added functionality to interact with different AI models depending on your goal for the interaction."
              }
              description3={
                "So what are you waiting for? Go and check out J.A.R.V.I.S today!"
              }
              image={Jarvis}
              fontFamily=""
              githubURL={"https://github.com/zackzellto/JARVIS"}
              liveURL={"https://jarvisopenai.netlify.app/"}
              techUsed={[
                ReactLogo,
                HTMLLogo,
                TailwindCSSLogo,
                TypeScriptLogo,
                PythonLogo,
                FlaskLogo,
                MongoDBLogo,
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <div className="">
              <div
                className={`animate-bounce ${
                  expanded ? "rotate-180 transform" : ""
                } inline-block`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-14 w-14 cursor-pointer"
                  fill="#00ADB5"
                  viewBox="0 0 24 24"
                  stroke=""
                  onClick={handleToggle}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="text-[18px] text-white">More Projects</div>
            {expanded && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                <RegularProjectsCard
                  icon={""}
                  title={"AlgoStruct"}
                  description={
                    "AlgoStruct is a web application that allows users to visualize various sorting algorithms and data structures."
                  }
                  viewCode={"https://github.com/zackzellto/AlgoStruct"}
                  viewProject={""}
                  techUsed={[
                    ReactLogo,
                    BootstrapLogo,
                    HTMLLogo,
                    CSSLogo,
                    JavaScriptLogo,
                    NodeJSLogo,
                    PostgreSQLLogo,
                  ]}
                />
                <RegularProjectsCard
                  icon={""}
                  title={"Squashable"}
                  description={
                    "Squashable is a small web app that acts as a bug or issue tracker for small teams or individuals."
                  }
                  viewCode={"https://github.com/zackzellto/Squashable"}
                  viewProject={"https://zackzellto.github.io/Squashable/"}
                  techUsed={[
                    ReactLogo,
                    BootstrapLogo,
                    HTMLLogo,
                    CSSLogo,
                    JavaScriptLogo,
                    NodeJSLogo,
                    PostgreSQLLogo,
                  ]}
                />
                <RegularProjectsCard
                  icon={FaRegFileAlt}
                  title={"SWAPI"}
                  description={
                    "SWAPI is a simple web application that is able to consume the Star Wars API and display the data in a user friendly way."
                  }
                  viewCode={"https://github.com/zackzellto/SWAPI"}
                  viewProject={"https://zackzellto.github.io/SWAPI/"}
                  techUsed={[
                    ReactLogo,
                    BootstrapLogo,
                    HTMLLogo,
                    CSSLogo,

                    JavaScriptLogo,
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
