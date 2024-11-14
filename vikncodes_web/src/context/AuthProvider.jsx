import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const authContext = createContext();

export const useAuthContext = () => {
  return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || null);
  const [authUser, setAuthUser] = useState(localStorage.getItem('accessToken') ? jwtDecode(localStorage.getItem('accessToken')) : null);

  return (
    <authContext.Provider value={{ authUser,refreshToken,accessToken, setAuthUser,setAccessToken,setRefreshToken }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
