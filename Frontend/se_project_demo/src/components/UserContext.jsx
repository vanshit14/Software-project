import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserInfo] = useState();
  const [isuse,setuse] = useState();

  useEffect(()=>{
    setuse(userData);
    console.log("set",userData);
    console.log("setter",isuse);
  },[userData,isuse])

  return (
    <UserContext.Provider value={{ userData, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
