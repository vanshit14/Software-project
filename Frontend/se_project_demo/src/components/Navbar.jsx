import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const location = useLocation();
  const isLoginRoute = location.pathname === '/';
  const isRegisterRoute = location.pathname === '/RegistrationForm';

  const shouldRenderNavbar = !isLoginRoute && !isRegisterRoute;
  
  return shouldRenderNavbar ? (
    <nav className="navbar">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/profile">Profile</Link>
  </nav>
  
  ) : null;
};

export default Navbar;
