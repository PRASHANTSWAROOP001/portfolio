import React from "react";
import { Link, NavLink } from "react-router-dom";

import { IoSunnyOutline } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";
import { ThemeProvider } from "../../context/themeSwitch";
import { useState, useEffect } from "react";

function Navigation() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  function toggleIcon() {
    if (themeMode == "light") {
      darkMode();
    } else {
      lightMode();
    }
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  });

  const handleDownload = () => {
    const pdfUrl = "Jack Ryan.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.parentElement.removeChild(link);
  };

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="w-full dark:bg-gradient-to-r   dark:from-slate-900 dark:to-slate-700 dark:text-white  py-2  h-15  text-lg">
        <nav className="flex">
          <Link to="/">
            <h3 className="mx-5 cursor-pointer">
              Prashant X <span className=" text-yellow-500">Swaroop</span>
            </h3>
          </Link>
          <ul className="flex-1 text-center">
            <li className="dark:text-white list-none inline-block  px-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-700  dark:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" list-none inline-block px-5">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-yellow-400 border-1"
                      : "text-gray-700  dark:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className=" list-none inline-block px-5">
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-yellow-400 border-1"
                      : "text-gray-700  dark:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className=" list-none inline-block px-5">
              <NavLink
                to="github"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-yellow-400 border-1"
                      : "text-gray-700  dark:text-white"
                  }`
                }
              >
                Project
              </NavLink>
            </li>
          </ul>

          <div className="flex mr-28">
            <IoSunnyOutline
              onClick={toggleIcon}
              className={
                themeMode == "light"
                  ? " hidden w-8 h-8"
                  : " w-8 h-8 cursor-pointer"
              }
            />
            <GiNightSleep
              onClick={toggleIcon}
              className={
                themeMode == "dark"
                  ? " hidden w-8 h-8"
                  : " w-8 h-8 cursor-pointer"
              }
            />
          </div>

          <button
            onClick={handleDownload}
            className=" sm:px-3 sm:py-0 xl:mr-3 lg:px-4 lg:py-1 outline-none bg-yellow-400  rounded-md"
          >
            Resume
          </button>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default Navigation;
