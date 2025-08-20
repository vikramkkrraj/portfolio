// src/components/navbar/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll"; //react-scroll
import { Button } from "../common/Button"; //Import your custom Button
import "../../index.css";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "resume" },
  { label: "Contact", to: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resumeViewAndDownload = () => {
    // Open resume in a new tab
    window.open(
      "https://drive.google.com/file/d/1pZV1bTe1PEjhicD6ZWjyA36nKVREo0r6/view",
      "_blank"
    );

    // Trigger download
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1pZV1bTe1PEjhicD6ZWjyA36nKVREo0r6";
    link.download = "Vikram_Kumar_Raj_Resume.pdf";
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 top-4"
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center 
        px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-lg animate-gradient-x"
        style={{
          background:
            "linear-gradient(90deg, rgba(252,70,107,0.6), rgba(63,94,251,0.6), rgba(252,70,107,0.6))",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Vikram<span className="text-yellow-300">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg font-medium items-center">
          {navLinks.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="cursor-pointer relative transition-all duration-300 hover:text-green-300"
              activeClass="text-green-300 font-semibold"
            >
              <span className="hover:scale-105 transition">{label}</span>
            </ScrollLink>
          ))}

          {/* Resume Button */}
          <Button onClick={resumeViewAndDownload} className="ml-4">
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 bg-black/70 rounded-xl mx-6 py-4 space-y-4">
          {navLinks.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg font-medium transition hover:text-green-300"
              activeClass="text-green-300 font-semibold"
            >
              {label}
            </ScrollLink>
          ))}

          {/* Resume Button for Mobile */}
          <Button
            onClick={() => {
              resumeViewAndDownload();
              setIsOpen(false);
            }}
            className="w-full text-center"
          >
            Resume
          </Button>
        </div>
      )}
    </motion.nav>
  );
};
