// src/sections/ContactSection.jsx
import { motion } from "framer-motion";
import { ContactForm } from "../components/forms/ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-10"
        >
          Have an idea or collaboration in mind? Drop me a message!
        </motion.p>

        <ContactForm />
      </div>
    </section>
  );
};
