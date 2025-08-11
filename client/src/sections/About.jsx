// src/sections/About.jsx
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Blob animation
const blobAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    x: [0, 20, 0],
    y: [0, -20, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

export const About = () => {
  const imageUrl =
    "https://drive.google.com/uc?export=view&id=1JeM48y7OEF0_4KeJAGW_C90Dzae_m-Ue";

  return (
    <section className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden flex items-center justify-center">
      {/* Animated Blobs */}
      <motion.div
        className="absolute -top-10 -left-10 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        {...blobAnimation}
      />
      <motion.div
        className="absolute -bottom-20 -right-10 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        {...blobAnimation}
        transition={{ ...blobAnimation.transition, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        {...blobAnimation}
        transition={{ ...blobAnimation.transition, delay: 4 }}
      />

      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-y-8 relative z-10">
        {/* Profile Image with Tilt */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tilt
            glareEnable
            glareMaxOpacity={0.4}
            glareColor="#fff"
            glareBorderRadius="999px"
            scale={1.05}
            transitionSpeed={1500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="rounded-full"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
              <img
                src={imageUrl}
                alt="Vikram"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/0 hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
            </div>
          </Tilt>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          <motion.h2
            className="text-4xl font-bold"
            variants={textVariants}
            custom={0}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={textVariants}
            custom={1}
          >
            I'm <span className="text-yellow-400 font-semibold">Vikram</span>, a
            passionate Full Stack Developer based in India. I specialize in
            building fast and intuitive web experiences using modern tools like
            React, Node.js, and MongoDB.
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            variants={textVariants}
            custom={2}
          >
            Whether it’s crafting clean UIs or writing scalable backend logic, I
            love bringing ideas to life through technology.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 pt-6"
            variants={textVariants}
            custom={3}
          >
            <FaReact size={40} className="text-cyan-400 hover:scale-110 transition-transform" title="React" />
            <FaNodeJs size={40} className="text-green-500 hover:scale-110 transition-transform" title="Node.js" />
            <SiMongodb size={40} className="text-green-700 hover:scale-110 transition-transform" title="MongoDB" />
            <FaDatabase size={40} className="text-blue-300 hover:scale-110 transition-transform" title="Database" />
            <SiJavascript size={40} className="text-yellow-400 hover:scale-110 transition-transform" title="JavaScript" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
