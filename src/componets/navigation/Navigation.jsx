import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  
   const handleDownload = () =>{
          const pdfUrl = "Jack Ryan.pdf"
          const link = document.createElement("a")
          link.href = pdfUrl
          link.download = "resume.pdf"
          document.body.appendChild(link)
          link.click();
          link.parentElement.removeChild(link)
   }

  return (
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
                `${isActive ? "text-yellow-400" : "text-gray-700  dark:text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" list-none inline-block px-5">
            <NavLink
              to="about"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400 border-1" : "text-gray-700  dark:text-white"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className=" list-none inline-block px-5">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400 border-1" : "text-gray-700  dark:text-white"}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className=" list-none inline-block px-5">
            <NavLink
              to="github"
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400 border-1" : "text-gray-700  dark:text-white"}`
              }
            >
              Project
            </NavLink>
          </li>
        </ul>

        <button onClick={handleDownload} className=" sm:px-3 sm:py-0 xl:mr-3 lg:px-4 lg:py-1 outline-none bg-yellow-400  rounded-md">
          Resume
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
