// server/models/project.model.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: [String], // array of strings
    required: true,
  },
  techStack: {
    type: [String],
  },
  image: {
    type: String, // URL to hosted image
  },
  projectUrl: {
    type: String, // Live demo URL
  },
  githubUrl: {
    type: String, // GitHub repo link
  },
  order: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
