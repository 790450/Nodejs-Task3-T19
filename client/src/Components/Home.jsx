import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/api';// Adjust path as needed

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      if (res.status) {
        navigate('/login');
      } else {
        console.log("Logout failed on server");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div>
      Home
      <button><Link to="/dashboard">Dashboard</Link></button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home