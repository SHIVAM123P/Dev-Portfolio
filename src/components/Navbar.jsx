import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close, resume } from "../assets"; // Import your resume icon or image here

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full py-5 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-black"
            : "bg-white bg-opacity-100"
          : darkMode
          ? "bg-darkBlue"
          : "bg-black bg-opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden md:flex items-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-light text-lg font-bold cursor-pointer">
              Shivam Kumar
            </p>
          </Link>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setToggle(!toggle)}
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-7 h-7 object-contain"
              />
            </button>
          </div>
        </div>

        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? darkMode
                    ? "text-white"
                    : "text-black"
                  : "text-gray"
              } ${
                darkMode
                  ? "hover:text-blue-900"
                  : "hover:text-black-900"
              } hover:scale-105 transform transition-transform duration-300 ease-in-out text-lg font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-darkBlue absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium text-lg cursor-pointer ${
                    active === nav.title
                      ? darkMode
                        ? "text-white"
                        : "text-black"
                      : "text-gray"
                  } ${
                    darkMode
                      ? "hover:text-blue-900"
                      : "hover:text-black-900"
                  } hover:scale-105 transform transition-transform duration-300 ease-in-out`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <div className="flex items-center">
          <button
            className={`px-4 py-2 rounded ${
              darkMode ? "bg-secondary text-white" : "bg-black text-white-100"
            } mr-3 px-2 py-2 bg-primary text-white rounded transition-transform duration-300 ease-in-out hover:scale-110`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1ZqtXXzKA3cFO2bT0d34HZCDgZQbJWoOx/view?usp=sharing" 
            download="Shivam_Kumar_Resume.pdf" // Specify the filename for download
            target="_blank"
            rel="noopener noreferrer"
            className={`px-2 py-2 rounded flex items-center ${
              darkMode ? "bg-secondary text-white" : "bg-black text-white-100"
            }mr-3 px-1 py-2 bg-primary text-white rounded transition-transform duration-200 ease-in-out hover:scale-110`}
          >
            View Resume
            <img src={resume} alt="Resume Icon" className="w-5 h-5 ml-2 inline" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
