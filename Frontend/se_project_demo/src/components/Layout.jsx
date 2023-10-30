import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Navigate, useNavigate ,BrowserRouter,Route,Routes} from 'react-router-dom';
import Demo from "./Demo";
import Button from "./Button";
import './Layout.css'
const Layout = () => {
  return (
    <>
    <div className="layout">
       <Button></Button>  
    </div>
     </>

  )
};

export default Layout;