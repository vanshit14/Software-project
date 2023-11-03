import React, { useEffect, useState } from 'react'; 
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Layout from './components/Layout';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Provideride from './components/Provideride';
import Profile from './components/Profile';
import { UserProvider,UserContext,context } from './components/UserContext';
import Mapview from './components/Mapview';


function App() {
  // useEffect(() => {
	// 	fetch("http://localhost:3300/ride").then((response) => {response.json().then((res)=>{
  //   console.log(res);  
  //   setData(res)
  // })}) 
	// }, []);


  return (
    <div>
     
      <div>
      <BrowserRouter>
      <UserProvider>
      
           
      <div className='nav'>
      <Navbar></Navbar>
    </div>
      <Routes>
     <Route path="/" Component={Login}/>
     <Route path="/RegistrationForm" Component={RegistrationForm}/>
     <Route path="/Layout" element={<Layout/>}></Route>
    <Route path="/Provideride" Component={Provideride}></Route>
    <Route path = "/Demo" Component={Demo}></Route>
    <Route path = "/Profile" Component={Profile}></Route>
    <Route path ="/Mapview" Component={Mapview}></Route>
      </Routes>
       
      </UserProvider>
      </BrowserRouter>
</div>
    </div>
  );
}

export default App;
