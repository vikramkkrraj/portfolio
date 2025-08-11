// src/sections/HeroSection.jsx
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hey, I'm{" "}
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-to-r from-yellow-400 via-orange-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent"
        >
          Vikram Kumar Raj
        </motion.span>{" "}
        👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-2xl max-w-2xl"
      >
        A passionate full-stack developer building modern web experiences.
      </motion.p>
    </section>
  );
};