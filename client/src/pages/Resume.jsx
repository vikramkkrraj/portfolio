// src/pages/Resume.jsx
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFramer } from "react-icons/si";
import { Button } from "../components/common/Button";

// Skills grouped with corresponding icons
const frontendSkills = [
  { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { label: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { label: "React", icon: <FaReact className="text-cyan-400" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
];

const backendSkills = [
  { label: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { label: "Express", icon: <SiExpress className="text-gray-300" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
];

const tools = [
  { label: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { label: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
];

export const Resume = () => {
  const gDriveView =
    "https://drive.google.com/file/d/1uV9QvOg2TiMtfxirGLjwWIjjnlRXkdJy/view";
  const gDriveDownload =
    "https://drive.google.com/uc?export=download&id=1uV9QvOg2TiMtfxirGLjwWIjjnlRXkdJy";

  const handleViewAndDownload = () => {
    // Open resume in new tab (view)
    window.open(gDriveView, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = gDriveDownload;
    link.download = "Vikram_Kumar_Raj_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen px-6 py-20 pt-10 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          My Resume
        </motion.h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {/* Combined View & Download */}
          <Button
            onClick={handleViewAndDownload}
            className="from-blue-500 via-purple-500 to-pink-500"
          >
            View & Download
          </Button>
        </div>

        {/* Skills Section */}
        <div className="text-left space-y-12">
          {/* Frontend Skills */}
          <div>
            <motion.h2
              className="text-2xl font-semibold mb-4 text-yellow-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Frontend Skills
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {frontendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center bg-gray-800 py-5 px-4 rounded-lg text-white font-medium text-lg shadow-md transition duration-300 hover:text-black"
                  style={{ transition: "all 0.3s ease-in-out" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1f2937";
                  }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div>{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <motion.h2
              className="text-2xl font-semibold mb-4 text-yellow-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Backend Skills
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {backendSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center bg-gray-800 py-5 px-4 rounded-lg text-white font-medium text-lg shadow-md hover:bg-yellow-500 hover:text-black transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1f2937";
                  }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div>{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Libraries */}
          <div>
            <motion.h2
              className="text-2xl font-semibold mb-4 text-yellow-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Tools & Libraries
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {tools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center bg-gray-800 py-5 px-4 rounded-lg text-white font-medium text-lg shadow-md hover:bg-yellow-500 hover:text-black transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1f2937";
                  }}
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div>{tool.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
