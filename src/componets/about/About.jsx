import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import TechComp from "../divs/TechComp";

function About() {
  const content_one = {
    subHead1: "Intro",
    subHead2: "Education",
    mainHead1: "Introduction",
    mainHead2: "Education",
    para1:
      "I'm an aspiring minimalist web dev, crafting simple, elegant designs while mastering front-end skills!",
    para2:
      "I hold a BSc in CS and now diving into an MCA to elevate  my tech prowess!",
  };

  const content_two = {
    subHead1: "Languages",
    subHead2: "Tech Stack",
    mainHead1: "Programming Lang.",
    mainHead2: "Tech Stack",
    para1: "C , C++, Python, Javascript",
    para2: "Git, React(*Learning), Telwind Css, Html, Css",
  };

  return (
    <div className="w-full h-screen dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white">
      <div className=" py-3 mx-5  text-center">
        <h1 className="text-5xl py-3">
          Hey!!
          <span className="text-yellow-400 text-5xl py-3">
            {" "}
            <Typewriter
              words={[
                "Welcoming",
                "You All",
                "To My About Page",
                "Now Lets See",
                "My Tech Stack",
              ]}
              loop={5}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursor
              cursorStyle="/"
            />
          </span>
        </h1>

        <p className="font-medium py-3 text-lg">
          Hi I am an aspiring webdeveloper. I am currently learning new
          technologies. If you are also a tech guy we can connect...
        </p>

        <button className="bg-gradient-to-tr from-blue-600  to-gray-800 py-1 px-4 rounded-xl text-white my-4 font-medium hover:bg-yellow-300">
        <a href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"  target="_blank" rel="noopener noreferrer">Connect</a>
        </button>

        <div className="w-full h-full sm:flex sm:flex-col sm:gap-10  lg:flex  lg:flex-row  justify-around items-center my-32">
          <TechComp content={content_one}></TechComp>
          <TechComp content={content_two}></TechComp>
        </div>
      </div>
    </div>
  );
}

export default About;
