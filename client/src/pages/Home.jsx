import { useEffect, useState } from "react";
import api from "../services/api";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { ContactSection } from "../sections/ContactSection";
import { Resume } from "./Resume";

export const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects");
        const featured = res.data.filter((p) => p.isFeatured);
        setProjects(featured);
      } catch (err) {
        console.error("Failed to load featured projects", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="resume">
        {/* If you want a Resume section, add it here */}
        {/* <h2 className="text-center text-2xl font-bold">My Resume</h2> */}
        {/* Resume component can go here */}
        <Resume />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};
