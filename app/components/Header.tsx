"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY || currentScrollY < 60) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md transition-transform ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          YourName
        </a>
        <nav className="flex gap-4">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
