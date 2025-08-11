// src/components/common/Button.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, type = "button", className = "", href, target }) => {
  const baseStyles =
    "inline-block px-6 py-2 rounded-full font-semibold transition-all text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 shadow-lg ring-2 ring-offset-2 ring-pink-300";

  if (href) {
    return (
      <motion.a
        href={href}
        target={target || "_self"}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.08, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};