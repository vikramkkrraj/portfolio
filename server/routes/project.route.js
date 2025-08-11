import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", upload.single("image"), createProject);
router.get("/", getAllProjects);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

export default router;
