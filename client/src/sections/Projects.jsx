import { useEffect, useState } from "react";
import { getAllProjects } from "../services/projectService";
import { ProjectCard } from "../components/project/ProjectCard";
import { ProjectModal } from "../components/project/ProjectModal"; //  import modal
import { motion } from "framer-motion";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); //  modal state

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch projects", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-96 bg-gray-800 animate-pulse rounded-lg" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl blur-lg z-0" />
                <div className="relative z-10 h-full">
                  <ProjectCard
                    project={project}
                    index={index}
                    onPreview={() => setSelectedProject(project)} //  open modal
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Preview */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
};
