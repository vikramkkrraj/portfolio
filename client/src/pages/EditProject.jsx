// src/pages/EditProject.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await api.get(`/projects`);
        const project = res.data.find((p) => p._id === id);
        setForm({
          ...project,
          description: project.description || [""],
          techStack: project.techStack || [""],
        });
      } catch (err) {
        console.error("Failed to load project", err);
      }
    };
    fetchProject();
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
      if (image) formData.append("image", image);

      await api.put(`/projects/${id}`, formData);
      navigate("/admin");
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setUploading(false);
    }
  };

  if (!form) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="w-full border p-2 rounded" />

        {form.description.map((desc, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={desc}
              onChange={(e) => handleArrayChange("description", i, e.target.value)}
              placeholder="Description line"
              className="w-full border p-2 rounded"
            />
            <button type="button" onClick={() => removeField("description", i)} className="text-red-500">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("description")} className="text-sm text-blue-600">+ Add Description</button>

        {form.techStack.map((tech, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={tech}
              onChange={(e) => handleArrayChange("techStack", i, e.target.value)}
              placeholder="Tech"
              className="w-full border p-2 rounded"
            />
            <button type="button" onClick={() => removeField("techStack", i)} className="text-red-500">X</button>
          </div>
        ))}
        <button type="button" onClick={() => addField("techStack")} className="text-sm text-blue-600">+ Add Tech Stack</button>

        <input name="projectUrl" value={form.projectUrl} onChange={handleChange} placeholder="Live Project URL" className="w-full border p-2 rounded" />
        <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="GitHub Repo URL" className="w-full border p-2 rounded" />
        <input name="order" type="number" value={form.order} onChange={handleChange} placeholder="Order" className="w-full border p-2 rounded" />

        <label className="flex gap-2 items-center">
          <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} />
          Featured Project
        </label>

        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full" />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
          disabled={uploading}
        >
          {uploading ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
};
