import React from 'react';
import useHttp from '../hooks/use-http';
import ChangePasswordForm from './ChangePasswordForm';

const ChangePassword = () => {
  const { sendRequest } = useHttp();
  const id = localStorage.getItem('id');

  const changePassword = (newPassword) => {
    sendRequest({
      url: `http://localhost:8000/api/changePassword/${id}`,
      body: { newPassword: newPassword },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('password',newPassword);
    alert('password change successfully')
  };

  return (
    <div>
      <ChangePasswordForm onChangePassword={changePassword} />
    </div>
  );
};

export default ChangePassword;
