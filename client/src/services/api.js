import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
axios.get(`${API_BASE_URL}/auth/logout`, { withCredentials: true })
  .then(res => {
    console.log("Logged out:", res.data);
  })
  .catch(err => {
    console.error("Logout error:", err);
  });