import React from 'react';
import { useState } from 'react';
import classes from './ChangePassword.module.css';

const ChangePasswordForm = (props) => {
    const [currentPassword,setCurrentPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [retypeNewPassword,setRetypeNewPassword] = useState('');
    const currPass = localStorage.getItem('password');

    const currentPasswordHandler = (e) =>{
        setCurrentPassword(e.target.value);
    }

    const newPasswordHandler = (e) =>{
        setNewPassword(e.target.value);
    }

    const retypeNewPasswordHandler = (e) =>{
        setRetypeNewPassword(e.target.value);
    }

    const formSubmitHandler =(e)=>{
        e.preventDefault();

        if(currPass !== currentPassword){
            alert(`Current Password doesn't match`);
        }else if(newPassword !== retypeNewPassword){
            alert('new password and retypeNewPassword doesn`t same');
        }else{

            props.onChangePassword(newPassword);
        }


    }

    
  return (
    <div className={classes.changePassword}>
        <h2 className={classes.h2}>Change Password</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          type="password"
          id={classes.currentPass}
          placeholder="Current Password"
          value={currentPassword}
          onChange={currentPasswordHandler}
        />
        <br />
        <input
          type="password"
          id={classes.newPass}
          placeholder="New Password"
          value={newPassword}
          onChange={newPasswordHandler}
        />
        <br />
        <input
          type="password"
          id={classes.retypePass}
          placeholder="Confirm New Password"
          value={retypeNewPassword}
          onChange={retypeNewPasswordHandler}
        />
        <br />
        <div id={classes['password-container']} style={{ padding: '30px 0px' }}>
          <button id={classes.btn} className='btn btn-danger' type='submit'>Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
