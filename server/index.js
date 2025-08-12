import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import cookieParser from "cookie-parser";
import morgan from 'morgan';

import authRoutes from "./routes/auth.route.js";
import infoRoutes from "./routes/info.route.js";
import contactRoutes from "./routes/contact.route.js";
import projectRoutes from "./routes/project.route.js";
import connectDB from './db/config.js';

const app = express();
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: "https://portfolio-rgq3-i0zjxn5ud-vikram-s-projects-bac60270.vercel.app", // your frontend URL
  credentials: true,               // allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))

app.get("/", (req,res)=> {
   res.send({ message : " Hello there"})
})

app.use("/api/auth", authRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
