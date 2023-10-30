import React, { useState } from 'react';
import Layout from './Layout';
import {Routes, Route, useNavigate, Navigate, useNavigation} from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [last, setLast] = useState('');
  const [first, setFirst] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    last: '',
    first: '',
    username: '',
    dob: '',
    gender: '',
    password: '',
    phone: '',
    email: '',
  });

  const navigate = useNavigate();

  // const navigation = () =>{
  //   navigate('/Layout');
  // }

  const handleRegistration = () => {
    // Validate individual fields
    const newErrors = {
      last: last? '' : 'Last name is required.',
      first: first ? '' : 'First name is required.',
      username: username ? '' : 'Username is required.',
      dob: dob ? '' : 'Date of Birth is required.',
      gender: gender ? '' : 'Please select a gender.',
      password: password ? '' : 'Password is required.',
      phone: phone ? '' : 'Phone number is required.',
      email: email ? '' : 'Email is required.',
    };

    // Update errors state
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }
    // Send data to the server for processing
    const userData = {
      last,
      first,
      username,
      dob,
      gender,
      password,
      phone,
      email,
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };
    fetch("http://localhost:3300/newuser", requestOptions)
  .then((res) => {
    console.log(res);
    navigate('/Layout');
    // Handle the response here if needed
  })
  .catch((error) => {
    console.error("Error:", error);
  });

    // Send userData to the server for further processing
    console.log('Sending data to the server:', userData);
  };

  return (
    <div className="container">
      <label>Last Name: </label>
      <input
        type="text"
        value={last}
        onChange={(e) => setLast(e.target.value)}
        required
      />
      {errors.last && <div className="error">{errors.last}</div>}

      <label>First Name: </label>
      <input
        type="text"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        required
      />
      {errors.first && <div className="error">{errors.first}</div>}

      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <label>Date of Birth: </label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      {errors.dob && <div className="error">{errors.dob}</div>}

      <label>Gender: </label>
      <select value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <div className="error">{errors.gender}</div>}

      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <label>Phone No: </label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {errors.email && <div className="error">{errors.email}</div>}

      <button className="register" onClick={()=>{handleRegistration();}}>Register</button>
    </div>
  );
};

export default RegistrationForm;