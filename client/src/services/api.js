// client/src/api.js

import axios from "axios";

// Use environment variable or fallback to localhost
const API_BASE_URL = "https://nodejs-task3-t19.onrender.com"

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Send cookies (required for auth)
});

// Logout function
export const logoutUser = async () => {
  try {
    const response = await api.get('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;

// You can also add loginUser, registerUser, etc. here later
