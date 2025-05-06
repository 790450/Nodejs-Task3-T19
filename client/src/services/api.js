import axios from "axios";

// Get the base URL from the environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // Local fallback

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Enable sending cookies with requests (if needed)
});

export default api;
