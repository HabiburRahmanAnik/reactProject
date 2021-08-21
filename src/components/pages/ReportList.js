import React from 'react';
import classes from './TableCommon.module.css';

const ReportList = ({id, name, status, message,onOptionChange, findId }) => {

  const optionChangeHandler = (e)=>{
    onOptionChange(e.target.value);
  }

  const idHandler = ()=>{
    findId(id)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{message}</td>
      <td>{status}</td>
      <td>
        <select id={classes['select-option']} onChange={optionChangeHandler}>
          <option >Selected Option</option>
          <option value="working">Working</option>
          <option value="fixed">Fixed</option>
        </select>
      </td>
      <td>
            <button className="btn btn-primary" type="submit" onClick={idHandler}>
            Update
            </button>
      </td>
    </tr>
  );
};

export default ReportList;
