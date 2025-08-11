import { Projects } from "./Projects";

export const FeaturedProjects = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
      <Projects onlyFeatured={true} limit={3} />
    </section>
  );
};
