import api from "./api";

export const sendMessage = (formData) => api.post("/contact", formData);
