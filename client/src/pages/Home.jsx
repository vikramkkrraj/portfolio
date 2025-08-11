// src/pages/Home.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { ContactSection } from "../sections/ContactSection";

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
      <Hero />
      <About />
      <Projects projects={projects} />
      <ContactSection />
    </main>
  );
};
