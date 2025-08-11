// src/services/api.js
import axios from "axios";

console.log(import.meta.env.VITE_API_BASE_URL);


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
  withCredentials: true, // send cookies
});

export default api;
