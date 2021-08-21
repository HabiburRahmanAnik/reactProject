import React, {useContext } from 'react';
import classes from './TableCommon.module.css'
import SalaryList from './SalaryList';
import SalaryContext from '../context/salary-context';

const ManageSalary = () => {
 const context = useContext(SalaryContext)

  return (
    <>
      {context.isLoading && <div class={classes.loader}></div>}
      {!context.isLoading && <table className={classes.tables} style={{ marginTop: '150px', minWidth: '65%' }}>
        <thead>
          <th>Username</th>
          <th>Email</th>
          <th>Type</th>
          <th>Salary</th>
          <th>Action</th>
        </thead>
        <tbody>
          {context.salaries.map((salary) => (
            <SalaryList
              key={salary.id}
              id={salary.id}
              name={salary.username}
              email={salary.email}
              salary={salary.salary}
              type={salary.type}
            />
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default ManageSalary;
