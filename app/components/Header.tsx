"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY || currentScrollY < 60) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
        isMenuOpen && setIsMenuOpen(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md transition-transform z-50 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center mx-3 md:mx-9 lg:mx-16">
        <a href="#hero" className="text-xl font-bold">
          <img className="h-8 w-8" src="/icons/logo.png" alt="Logo" />
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-400 hover:text-gray-300"
          aria-label="Toggle Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav
          className={`flex-col sm:flex-row flex sm:opacity-100 sm:max-h-[500px] sm:pl-6  sm:gap-4 absolute sm:static top-14 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent text-white overflow-hidden transition-all duration-1000 ease-in-out
            ${
              isMenuOpen
                ? "opacity-100 max-h-[500px] pl-6"
                : "opacity-0 max-h-0"
            }
            
            
            `}
        >
          <a href="#about" className="hover:text-gray-300 py-2 px-4 sm:py-0">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300 py-2 px-4 sm:py-0">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300 py-2 px-4 sm:py-0">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 py-2 px-4 sm:py-0">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
