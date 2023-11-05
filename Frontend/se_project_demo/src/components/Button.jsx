import React from 'react';
import './Button.css';
import {useNavigate} from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
const navigatetoprovide =()=>{
    navigate('/Provideride');
}

const navigatetobook = () => {
navigate('/Bookride');
}

  return (
    <div className="centered-container">
      <button  onClick={navigatetoprovide} className="centered-button">Provide a ride</button>
      <button onClick={navigatetobook} className="centered-button">Book a ride</button>
     
    </div>
  );
};

export default Button;
