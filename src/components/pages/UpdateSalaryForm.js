import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SalaryContext from '../context/salary-context';
import classes from './AddUser.module.css';

const UpdateSalaryForm = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [currentSalary, setCurrentSalary] = useState(props.currentSalary);
  const [updateSalary, setUpdateSalary] = useState('');
  const context = useContext(SalaryContext);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const currentSalaryHandler = (e) => {
    setCurrentSalary(e.target.value);
  };

  const updateSalaryHandler = (e) => {
    setUpdateSalary(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      updateSalary: updateSalary,
    };

    context.onUpdateSalary(data, props.id);
    history.push('/admin/manageSalary');
  };

  return (
    <>
      {context.isLoading && <div className={classes.loader}></div>}
      {!context.isLoading && (
        <div className={classes['row-right']} style={{ height: '520px' }}>
          <h1 id="user">Update Salary</h1>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id={classes.username}
              type="text"
              value={username}
              onChange={usernameHandler}
            />
            <label htmlFor="username">Email</label>
            <input
              id={classes.email}
              type="email"
              value={email}
              onChange={emailHandler}
            />
            <label htmlFor="salary">Current Salary</label>
            <input
              type="text"
              id={classes.salary}
              value={currentSalary}
              onChange={currentSalaryHandler}
            />
            <label htmlFor="salary">Update Salary</label>
            <input
              type="text"
              id={classes.salary}
              value={updateSalary}
              onChange={updateSalaryHandler}
            />
            <br />

            <button id={classes['add_button']}type="submit">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateSalaryForm;
