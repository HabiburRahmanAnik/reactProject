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
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const history = useHistory();

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (e.target.value.trim() !== '') {
      setEmailIsValid(true);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.trim() !== '') {
      setPasswordIsValid(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim().length === 0) {
      setEmailIsValid(false);
      //  return;
    }
    if (password.trim().length === 0) {
      setPasswordIsValid(false);
      // return;
    }

    if (email.trim().length > 0 && password.trim().length > 0) {
      authCtx.onLogin(email, password);
    }

    if (props.isLoggedIn) {
      history.push('/admin/dashboard');
    }
  };
  
  const errorMsg= authCtx.userLoginData;

  return (
    <>
    {authCtx.error && <div className={classes.error}>
        {errorMsg.invalid}
      </div>}
      <div class={classes.login}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            id={classes.name}
            type="email"
            name="email"
            placeholder="Email"
            onChange={emailHandler}
          />
          {!emailIsValid && (
            <label className={classes['error-text']}>
              Email must not be empty.
            </label>
          )}
          <br />
          <br />
          <input
            id={classes.pass}
            type="password"
            name="password"
            placeholder="Password"
            onChange={passwordHandler}
          />
          {!passwordIsValid && (
            <label className={classes['error-text']}>
              Password must not be empty.
            </label>
          )}
          <div className={classes.actions}>
            <button type="submit" className={classes.button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
