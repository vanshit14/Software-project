import Button from "./Button";
import { useEffect } from "react";
import './Layout.css'
import {useUser} from './UserContext';
import {useNavigate} from 'react-router-dom';
const Layout = () => {
  const navigate = useNavigate();
  const navigatetoprovide =()=>{
      navigate('/Provideride');
  }
  
  const navigatetobook = () => {
  navigate('/Bookride');
  }
    const {userInfo} = useUser();
  useEffect(()=>{
    console.log("context data:",userInfo);
  },[userInfo])
  return (

    <div className="layout">

      <div className="book-provide">

        <div className="ride">
          <div className="ride-content">

          </div>
          <button onClick={navigatetoprovide}  className="ride-button">Provide Ride</button>
        </div>

        <div className="ride">
          <div className="ride-content">

          </div>
          <button onClick={navigatetobook} className="ride-button">Book Ride</button>
        </div>
        

      </div>
    </div>
  )
};

export default Layout;