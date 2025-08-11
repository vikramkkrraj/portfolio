// src/components/project/ProjectCard.jsx
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const techStackVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export const ProjectCard = ({
  project,
  showActions = false,
  onEdit,
  onDelete,
  onPreview,
  index = 0,
}) => {
  const {
    title,
    description = [],
    techStack = [],
    projectUrl,
    githubUrl,
    isFeatured,
    image,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
      }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.2)" }}
      onClick={onPreview}
      className="relative border rounded-lg shadow bg-white dark:bg-gray-900 overflow-hidden 
                 transition-all duration-300 group flex flex-col h-full min-h-[420px] cursor-pointer"
    >
      {/* Glow Border */}
      <div
        className="absolute -inset-[2px] z-[-1] rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)",
        }}
      />

      {/* Image with overlay and animation */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <>
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition duration-700"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center"
            >
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {title}
              </h3>
            </motion.div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          {isFeatured && (
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">
              Featured
            </span>
          )}

          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4 mb-3">
            {description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack with motion */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={techStackVariants}
              className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded transition-all 
                         hover:bg-indigo-200 dark:bg-indigo-800 dark:text-white dark:hover:bg-indigo-700"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mb-2"
        >
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline text-sm transition"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub /> Code
            </a>
          )}
        </motion.div>

        {/* Admin Actions */}
        {showActions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center mt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onEdit}
              className="text-blue-600 text-sm hover:underline"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="text-red-600 text-sm hover:underline"
            >
              Delete
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onPreview: PropTypes.func,
  index: PropTypes.number,
};
