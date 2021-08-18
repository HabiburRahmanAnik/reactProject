import React from 'react';
import { useState } from 'react';
import classes from './Login.module.css';
import { useHistory } from 'react-router';
import AuthContext from '../context/auth-context';
import { useContext } from 'react';

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(email.trim().length === 0 && password.trim().length === 0){
        alert('Please Enter email and password')
    }

    if(props.isLoggedIn){
      history.push('/admin/dashboard');
    }

    authCtx.onLogin(email,password);
  };

  return (
    <div class={classes.login}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">E-Mail</label>
        <input
          id={classes.name}
          type="email"
          name="email"
          onChange={emailHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id={classes.pass}
          type="password"
          name="password"
          onChange={passwordHandler}
        />
        <div className={classes.actions}>
          <button type="submit" className={classes.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
