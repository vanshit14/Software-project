import React from 'react';
import './Button.css';
import { Navigate, useNavigate ,BrowserRouter,Route,Routes} from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
const navigation =()=>{
    navigate('/Demo');
}

  return (
    <div className="centered-container">
      <button  onClick={navigation} className="centered-button">Provide a ride</button>
      <button className="centered-button">Book a ride</button>
     
    </div>
  );
};

export default Button;
