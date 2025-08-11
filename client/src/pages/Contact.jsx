// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { ContactSection } from "../sections/ContactSection";

export const Contact = () => {
  return (
    <section className="min-h-screen pt-28 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'd love to hear from you! Reach out via the form below or directly at:
        </motion.p>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-medium">
            📧 Email:{" "}
            <a
              href="mailto:vikramkkrraj@gmail.com"
              className="text-yellow-400 hover:underline"
            >
              vikramkrraj9876@gmail.com
            </a>
          </p>
          <p className="text-xl font-medium mt-2">
            📞 Phone:{" "}
            <a
              href="tel:+8935841861"
              className="text-yellow-400 hover:underline"
            >
              +91 8935841861
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </section>
  );
};
