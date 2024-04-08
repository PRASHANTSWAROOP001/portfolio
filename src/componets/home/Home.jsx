import React, { useContext, useEffect, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { IoSunnyOutline } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useTheme, { ThemeProvider } from "../../context/themeSwitch";


function Home() {

// const[themeMode, setThemeMode] = useState("light")


//  const darkMode = () => {
//   setThemeMode("dark")
// }

// // if we define the function as it is defined while declaring the context this method is passed on to them

// // to useContext we must declare a context first
// //

// const lightMode = () =>{
//   setThemeMode("light")
// }

// function toggleIcon(){
//   if(themeMode == "light"){
//     darkMode()
//   }
//   else{
//     lightMode()
//   }
// }

// useEffect(() => {

//   const html = document.querySelector("html")
//   html.classList.remove("light", "dark")
//   html.classList.add(themeMode)
//   console.log(themeMode)

// },[themeMode])


  // const{darkMode,lightMode} = useTheme()
  // const [dayMode, setNightMode] = useState(false);

//by default nightMode is false that means its a dayMode

  // function toggleIcon() {
  //   setNightMode((prev) => !prev);
  //   if(!dayMode){
  //     darkMode();
  //   }
  //   else{
  //     lightMode();
  //   }
  //   console.log("clicked working");
  // }


  return (
    
    <div className="w-full h-screen    dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 dark:text-white relative  ">
      <div className="absolute   mt-36 mx-4">
        <h1 className="text-8xl mb-3">
          Hiii I am <br />

          <span className="text-yellow-400">
            <Typewriter
              words={[
                "Prashant Swaroop",
                "Coder",
                "Aspiring Full Stack Dev",
                "Developer",
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

        <p className="mx-2 text-2xl mb-1">
          I am an aspiring full Stack Developer. Lets Connect...
        </p>

        <button className=" bg-gradient-to-tr from-blue-600  to-gray-800 text-white px-2 py-1 rounded-md hover:bg-yellow-300 mx-2 mt-2">
          <a
            href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </button>
        <button className=" bg-gradient-to-r  from-gray-700 to-green-400 text-white px-2 py-1 rounded-md hover:bg-gray-700 mx-4 mt-2">
          <a
            href="https://github.com/PRASHANTSWAROOP001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </button>
      </div>
     

      <div className=" flex flex-col  justify-evenly items-center w-20  h-96 bg-transparent border-2 border-yellow-400 rounded-lg  fixed mt-36  right-2">
        <a
          href="https://github.com/PRASHANTSWAROOP001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className=" cursor-pointer  w-12 h-12 " />
        </a>
        <a
          href="https://www.linkedin.com/in/prashant-swaroop-b051141a5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className=" cursor-pointer w-10  h-10  " />
        </a>
        <a
          href="https://www.instagram.com/prashant_swaroop101?igsh=MXhpb2Ruang4N2loNg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className=" cursor-pointer w-10  h-10  " />
        </a>

        <a
          href="https://twitter.com/Swaroop_1O1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className=" cursor-pointer w-10  h-10 " />
        </a>
      </div>
    </div>
  );
}

export default Home;
