import React from 'react';
import { useState } from 'react';
import classes from './Login.module.css';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const history = useHistory();

    const emailHandler =(e) =>{
        setEmail(e.target.value);
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        props.onLogin();
        history.push('/admin/dashboard')
    }


    return (
     <div class={classes.login}>
        <h1>Log In</h1>
        <form onSubmit={submitHandler}>
            <input id={classes.name} type="email" name="email" placeholder="Email..." onChange={emailHandler}/><br/>
            <input id={classes.pass} type="password" name="password" placeholder="Password..." onChange={passwordHandler}/><br />
            <input id={classes.button} type="submit" name="submit" value="Log In"/>
        </form>
    </div>
    );
}

export default Login;
