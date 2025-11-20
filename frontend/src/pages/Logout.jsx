import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Clear Authentication Data (The crucial cleanup)
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
    // localStorage.clear(); // Use this if you need to clear all local data

    // 2. Redirect to the Login Page
    // Navigate the user to your defined login route.
    // Replace '/login' with your actual login path.
    navigate('/login'); 
    
    // Optional: Use 'navigate(0)' to force a full page refresh 
    // if client state needs a hard reset.
  };

  return (
    <button onClick={handleLogout} class="btn btn-outline-danger">
      Logout
    </button>
  );
}

export default Logout;