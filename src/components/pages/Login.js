import React from 'react';
import { useState } from 'react';
import classes from './Login.module.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    props.onLogin(email,password);
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
