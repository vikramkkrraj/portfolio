import express from "express";
import { login, register ,getMe, logout} from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout)
router.post("/register", register); // For initial setup only
router.get("/me", protect, getMe); 




export default router;
