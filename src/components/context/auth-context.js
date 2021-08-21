import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';

const AuthContext = React.createContext({
  userLoginData: '',
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [userLoginData, setUserLoginData] = useState([]);

  const { sendRequest: fetchRequest } = useHttp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  const loginHandler = (email, password) => {
    const userLoginInformation = (data) => {
      setUserLoginData(data);
    };

    fetchRequest(
      {
        url: `http://localhost:8000/api/login`,
        method: 'POST',
        body: { email: email, password: password },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      userLoginInformation
    );

    if (userLoginData.email === email && userLoginData.password === password) {
      setError(false);
      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('id', userLoginData.id);
      localStorage.setItem('username', userLoginData.username);
      localStorage.setItem('password', userLoginData.password);
      localStorage.setItem('type', userLoginData.type);
      setIsLoggedIn(true);
    } else {
      setError(true);
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
    setError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        userLoginData: userLoginData,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
