import React from 'react';
import { Link } from 'react-router-dom';


const SalaryList = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.type}</td>
      <td>{props.salary}</td>
      <td>
        <Link to={`/admin/manageSalary/${props.id}`}>
        <button className="btn btn-outline-success" type='button'>Update Salary</button>
        </Link>
      </td>
    </tr>
  );
};

export default SalaryList;
