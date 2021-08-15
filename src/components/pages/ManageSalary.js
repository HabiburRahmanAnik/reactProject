import React, { useEffect, useState } from 'react';
import './dass.css';
import useHttp from '../hooks/use-http';
import SalaryList from './SalaryList';

const ManageSalary = () => {

    const {sendRequest } = useHttp();
    const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const manageSalary = (data) => {
      setSalaries(data);
    };
    sendRequest({ url: 'http://localhost:8000/api/manageSalary' }, manageSalary);
  }, [sendRequest]);


  return (
        <table className='tables' style={{marginTop:'150px',minWidth:"65%"}}>
            <thead>
                <th>Username</th>
                <th>Email</th>
                <th>Type</th>
                <th>Salary</th>
                <th>Action</th>
            </thead>
            <tbody>
                {salaries.map((salary)=>(
                    <SalaryList key={salary.id} id={salary.id} name={salary.username} email={salary.email} salary = {salary.salary} type={salary.type}/>
                ))}
            </tbody>
        </table>
  );
};

export default ManageSalary;
