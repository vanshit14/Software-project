// Navbar.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {

  const location = useLocation();
  const isLoginRoute = location.pathname === '/';
  const isRegisterRoute = location.pathname === '/RegistrationForm';

  const shouldRenderNavbar = !isLoginRoute && !isRegisterRoute;
  
  return shouldRenderNavbar ? (
    <nav className="navbar">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/Profile">Profile</a>
    </nav>
  ) : null;
};

export default Navbar;
