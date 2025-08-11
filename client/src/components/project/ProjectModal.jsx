import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";



export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { title, image, description, techStack, projectUrl, githubUrl } = project;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX size={24} />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full rounded mb-4 max-h-[300px] object-cover"
          />
        )}

        <ul className="list-disc pl-5 mb-4 text-sm text-gray-700 dark:text-gray-300">
          {description?.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack?.map((tech, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded dark:bg-indigo-800 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 flex-wrap">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              🔗 Live Preview
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 dark:text-gray-200 text-sm hover:underline"
            >
               {"< />"} Code View Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
