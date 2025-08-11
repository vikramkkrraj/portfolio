import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjects, deleteProject } from "../services/projectService";
import { toast } from "react-toastify";
import { ProjectCard } from "../components/project/ProjectCard";

export const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      console.log("Fetched projects:", data);
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch projects", err);
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      toast.success("Project deleted");
      fetchProjects();
    } catch (err) {
      console.error("Delete failed", err);
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <button
          onClick={() => navigate("/admin/projects/new")}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded shadow-md hover:scale-105 transition"
        >
          + Add Project
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-28 bg-gray-800 animate-pulse rounded"></div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <p className="text-gray-400">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              showActions
              onEdit={() => navigate(`/admin/projects/edit/${project._id}`)}
              onDelete={() => handleDelete(project._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
