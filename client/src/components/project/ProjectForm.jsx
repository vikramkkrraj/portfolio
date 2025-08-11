// src/components/project/ProjectForm.jsx
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import {
  createProject,
  updateProject,
  getProjectById,
} from "../../services/projectService";

export const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: [""],
    techStack: [""],
    projectUrl: "",
    githubUrl: "",
    order: 0,
    isFeatured: false,
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (key, index, value) => {
    const updated = [...form[key]];
    updated[index] = value;
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const addField = (key) => {
    setForm((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  };

  const removeField = (key, index) => {
    const updated = [...form[key]];
    updated.splice(index, 1);
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
      });
      if (image) formData.append("image", image);

      if (id) {
        await updateProject(id, formData);
      } else {
        await createProject(formData);
      }

      navigate("/admin");
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setUploading(false);
    }
  };

  const loadProject = async () => {
    try {
      const { data } = await getProjectById(id);
      setForm((prev) => ({
        ...prev,
        ...data,
        description: data.description || [""],
        techStack: data.techStack || [""],
      }));
    } catch (err) {
      console.error("Failed to load project", err);
    }
  };

  useEffect(() => {
    if (id) loadProject();
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit Project" : "Create New Project"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="w-full border p-2 rounded bg-gray-800 text-white" />

        {form.description.map((desc, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={desc}
              onChange={(e) => handleArrayChange("description", i, e.target.value)}
              placeholder="Description line"
              className="w-full border p-2 rounded bg-gray-800 text-white"
            />
            <button type="button" onClick={() => removeField("description", i)} className="text-red-400">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("description")} className="text-sm text-blue-400">+ Add Description</button>

        {form.techStack.map((tech, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={tech}
              onChange={(e) => handleArrayChange("techStack", i, e.target.value)}
              placeholder="Tech Stack"
              className="w-full border p-2 rounded bg-gray-800 text-white"
            />
            <button type="button" onClick={() => removeField("techStack", i)} className="text-red-400">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("techStack")} className="text-sm text-blue-400">+ Add Tech Stack</button>

        <input name="projectUrl" value={form.projectUrl} onChange={handleChange} placeholder="Live Project URL" className="w-full border p-2 rounded bg-gray-800 text-white" />
        <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="GitHub Repo URL" className="w-full border p-2 rounded bg-gray-800 text-white" />
        <input name="order" type="number" value={form.order} onChange={handleChange} placeholder="Order" className="w-full border p-2 rounded bg-gray-800 text-white" />

        <label className="flex items-center gap-2 text-sm text-white">
          <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} />
          Featured Project
        </label>

        {/* Drag & Drop File Upload */}
        <div {...getRootProps()} className="w-full border-2 border-dashed border-gray-600 p-6 rounded text-center bg-gray-900 cursor-pointer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-400">Drop the image here...</p>
          ) : (
            <p className="text-gray-400">Drag and drop an image here, or click to select</p>
          )}
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <motion.img
            src={previewUrl}
            alt="Preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-4 rounded-lg shadow-md max-h-56 object-contain mx-auto"
          />
        )}

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {uploading ? "Uploading..." : id ? "Update Project" : "Create Project"}
        </button>
      </form>
    </div>
  );
};
