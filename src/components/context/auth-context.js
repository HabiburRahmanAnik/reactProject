import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [userLoginData, setUserLoginData] = useState([]);

  const { sendRequest: fetchRequest } = useHttp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/login`,
        method: 'POST',
        body: { email: email, password: password },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      setUserLoginData
    );

    if (userLoginData.email === email && userLoginData.password === password) {
      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('id', userLoginData.id);
      localStorage.setItem('username', userLoginData.username);
      localStorage.setItem('password', userLoginData.password);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    const userLoggedInformation = localStorage.getItem('isLoggedIn');

    if (userLoggedInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
