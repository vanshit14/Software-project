import Button from "./Button";
import { useEffect,useState } from "react";
import './Layout.css'
import {setUserInfo,useUser} from './UserContext';
const Layout = () => {
  const { setUserInfo } = useUser();
    const {userData} = useUser();
  useEffect(()=>{
    
    console.log(userData);
  },[userData])
  return (
    <>
    <div className="layout">
       <Button></Button>  
    </div>
     </>

  )
};

export default Layout;