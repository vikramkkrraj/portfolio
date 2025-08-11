// server/controllers/project.controller.js
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";
import Project from "../models/project.model.js";


// Create new project
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      projectUrl,
      githubUrl,
      order,
      isFeatured,
    } = req.body;

    let parsedDescription = [];
    let parsedTechStack = [];

    try {
      parsedDescription = typeof description === "string" ? JSON.parse(description) : description;
      parsedTechStack = typeof techStack === "string" ? JSON.parse(techStack) : techStack;
    } catch (err) {
      return res.status(400).json({ error: "Invalid description or techStack format" });
    }

    let imageUrl = null;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "portfolio-projects",
      });
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path);
    }

    const newProject = await Project.create({
      title,
      description: parsedDescription,
      techStack: parsedTechStack,
      projectUrl,
      githubUrl,
      image: imageUrl,
      order,
      isFeatured: isFeatured === "true" || isFeatured === true,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: error.message });
  }
};




// Get all projects (optionally sorted)
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update project
// server/controllers/project.controller.js
export const updateProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      projectUrl,
      githubUrl,
      order,
      isFeatured,
    } = req.body;

    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Upload new image if provided
    let imageUrl = project.image;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "portfolio-projects",
      });
      imageUrl = result.secure_url;

      // Remove local temp file
      fs.unlinkSync(req.file.path);
    }

    project.title = title || project.title;
    project.description = description ? JSON.parse(description) : project.description;
    project.techStack = techStack ? JSON.parse(techStack) : project.techStack;
    project.projectUrl = projectUrl || project.projectUrl;
    project.githubUrl = githubUrl || project.githubUrl;
    project.order = order ?? project.order;
    project.isFeatured = isFeatured ?? project.isFeatured;
    project.image = imageUrl;

    const updated = await project.save();

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Helper to extract public_id from Cloudinary URL
const getPublicIdFromUrl = (url) => {
  const parts = url.split("/");
  const publicIdWithExt = parts.slice(-2).join("/"); // e.g., portfolio-projects/xyz123.png
  return publicIdWithExt.split(".")[0]; // remove extension
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Delete image from Cloudinary
    if (project.image) {
      const publicId = getPublicIdFromUrl(project.image);
      await cloudinary.uploader.destroy(publicId);
    }

    await Project.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
