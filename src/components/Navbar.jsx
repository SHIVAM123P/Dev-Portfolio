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
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-light text-lg font-bold cursor-pointer">
            Shivam Kumar
          </p>
        </Link>

        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray"
              } hover:text-white text-lg font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
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
                    active === nav.title ? "text-white" : "text-gray"
                  }`}
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
              darkMode ? "bg-secondary text-white" : "bg-white text-dark-100"
            } mr-2`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* Resume Download Button */}
          <a
            href="https://drive.google.com/file/d/1IOtr93DjvYzL4UlO-rBnnftbOm8wfMtO/view?usp=sharing" // Replace with the actual path to your resume file
            download="Shivam_Kumar_Resume.pdf" // Specify the filename for download
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded flex items-center ${
              darkMode ? "bg-secondary text-white" : "bg-white text-dark-100"
            }`}
          >
            View Resume
            <img
              src={resume}
              alt="Resume Icon"
              className="w-5 h-5 ml-2 inline"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
