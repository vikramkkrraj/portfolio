// src/services/projectService.js
import api from "./api";

// Create new project
export const createProject = (formData) =>
  api.post("/projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Update existing project
export const updateProject = (id, formData) =>
  api.put(`/projects/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Get a single project
export const getProjectById = (id) => api.get(`/projects/${id}`);

// Get all projects
export const getAllProjects = async () => {
  const res = await api.get("/projects");
  return res.data; // Only return the array
};

// Delete project
export const deleteProject = (id) => api.delete(`/projects/${id}`);
