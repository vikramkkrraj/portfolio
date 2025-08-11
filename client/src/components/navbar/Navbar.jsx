// src/components/navbar/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "../../index.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <div className="text-2xl font-bold text-white">
          Vikram<span className="text-yellow-300">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg font-medium">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`cursor-pointer relative transition-all duration-300 hover:text-green-300 ${
                location.pathname === to ? "text-green-300 font-semibold" : ""
              }`}
            >
              <span className="hover:scale-105 transition">{label}</span>
              <motion.span
                layoutId="underline"
                className={`absolute -bottom-1 left-0 w-full h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                  location.pathname === to ? "scale-x-100" : ""
                }`}
              />
            </Link>
          ))}
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
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`block text-white text-lg font-medium transition ${
                location.pathname === to ? "text-green-300 font-semibold" : "hover:text-green-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};
