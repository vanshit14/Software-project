import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [usernamein, setUsernamein] = useState('');
  const [passwordin, setPasswordin] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const[isdata,setdata]=useState([]);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true); // Set loading state to true while processing the request

    fetch(`http://localhost:3300/userdetail/${usernamein}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((dataarray) => {
        setdata(dataarray);
        const data = dataarray.length > 0 ? dataarray[0] : null;
        if (data && data.password) {
          if (passwordin === data.password) {
            //console.log("Password is correct");
            navigate('/Layout');
          } else {
            //console.log("Incorrect password");
            setError("Incorrect password");
          }
        } else {
          //console.log("No password found in the data");
          setError("No username found in the data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(`Error fetching data: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after request completion
      });
  };

  return (
    <div className='final'>
      <h2>Login</h2>
      <label>Username: </label>
      <input type="text" value={usernamein} onChange={(e) => setUsernamein(e.target.value)} />

      <label>Password: </label>
      <input type="password" value={passwordin} onChange={(e) => setPasswordin(e.target.value)} />

      {error && <div className="error-message" style={{color: 'red'}}>{error}</div>}

      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      <p>
        Don't have an account?{' '}
        <Link to="/RegistrationForm">
          <button>Register</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
