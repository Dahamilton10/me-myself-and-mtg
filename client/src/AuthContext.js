import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    Axios.get('api/auth/user_data')
      .then(response => {
        if (response.data.email) {
          setIsAuth(true)
          setUser(response.data)
        } else {
          setIsAuth(false)
        }
      })
  }

  const logout = async () => {
    Axios.get("/api/auth/logout")
      .then(() => {
        setIsAuth(false);
        return <Redirect to='/' />
      })
      .catch(err => console.log(err));
  };

  return <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth, logout, user }}>{children}</AuthContext.Provider>;
};
