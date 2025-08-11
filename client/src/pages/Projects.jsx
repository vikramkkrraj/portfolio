import { Projects } from "../sections/Projects";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <Projects />
      </div>
    </section>
  );
};
