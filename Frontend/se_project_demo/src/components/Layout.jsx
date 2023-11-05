import Button from "./Button";
import { useEffect } from "react";
import './Layout.css'
import {useUser} from './UserContext';
const Layout = () => {
    const {userInfo} = useUser();
  useEffect(()=>{
    console.log("context data:",userInfo);
  },[userInfo])
  return (
    <>
    <div className="layout">
       <Button></Button>  
    </div>
     </>

  )
};

export default Layout;