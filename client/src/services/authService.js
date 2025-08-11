import api from "./api";

export const loginUser = (credentials) => api.post("/auth/login", credentials);
export const logoutUser = () => api.post("/auth/logout");
export const getMe = () => api.get("/auth/me");
export const registerUser = (data) => api.post("/auth/register", data);
