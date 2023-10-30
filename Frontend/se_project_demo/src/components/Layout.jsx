import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Navigate, useNavigate ,BrowserRouter,Route,Routes} from 'react-router-dom';
import Demo from "./Demo";
import Button from "./Button";
const Layout = () => {
  return (
    <>
    <div>
      
      <Button></Button>  
    </div>
     </>

  )
};

export default Layout;