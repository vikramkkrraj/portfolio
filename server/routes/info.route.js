// server/routes/info.route.js
import express from "express";
const router = express.Router();

router.get("/resume", (req, res) => {
  res.json({ resumeUrl: process.env.RESUME_URL });
});

export default router;
