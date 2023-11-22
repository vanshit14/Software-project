import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useUser} from './UserContext';

import './Login.css';

const Login = () => {
  const [usernamein, setUsernamein] = useState('');
  const [passwordin, setPasswordin] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUserInfo } = useUser();
  const navigate = useNavigate();
  const handleLogin = async () => {
    setIsLoading(true);

  
    try {
      const response = await fetch(`http://localhost:3300/userdetail/${usernamein}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const dataarray = await response.json();
      const data = dataarray.length > 0 ? dataarray[0] : null;
  
      if (data && data.password === passwordin) {
        await setUserInfo(data);
        navigate('/Layout');
      } else {
        setError('Incorrect username or password');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Provide valid details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () =>{
    navigate('/RegistrationForm');
  }



  return (
  
      <div className='login'>
        <div className='login-box'>
<div className='login-text'>Login</div>
<div className='text-holder'>
<input type="text" className='login-username'  placeholder="Username" value={usernamein} onChange={(e) => {setUsernamein(e.target.value)}}/>
<input type="password" placeholder='Password' className='login-password' value={passwordin} onChange={(e) => {setPasswordin(e.target.value)}}/>
</div>
<div className='login-signup'>
<button className='login-button' onClick={handleLogin} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
<span onClick={handleRegister} className='account-text'>Create account</span>
</div>
        </div>
        <div className='curve-box'>
        </div>

      </div>
  );
};

export default Login;