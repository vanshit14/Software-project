import React from 'react';
import { useLocation,Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();



  const location = useLocation();
  const isLoginRoute = location.pathname === '/';
  const isRegisterRoute = location.pathname === '/RegistrationForm';

  const shouldRenderNavbar = !isLoginRoute && !isRegisterRoute;



  const logout = () =>{
    navigate('/');
  }
  
  return shouldRenderNavbar ? (
    <div className="navbar">

      <div className='symbol'></div>
      <div className='navbar-content'>
      <Link to="/home" className='home'>Home</Link>
      <Link to="/about" className='about-us'>About Us</Link>
      <Link to="/profile" className='profile'>Profile</Link>
      </div>

      <div className='navbar-button'>
        
        <button className='signup'onClick={logout}>Logout</button>
      </div>

    </div>  
  ) : null;
};

export default Navbar;
