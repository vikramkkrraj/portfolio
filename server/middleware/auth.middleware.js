import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // contains _id and email
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
