import React from 'react';
import classes from './TableCommon.module.css';

const WorkScheduleList = ({id,username,status,type,findId,onOptionChange}) => {

  const optionChangeHandler = (e)=>{
    onOptionChange(e.target.value);
  }

  const inHandler = ()=>{
    findId(id)
  }
    return (
        <tr>
            <td>{username}</td>
            <td>{type}</td>
            <td>{status}</td>
            <td>
                <select name="workShift" id={classes['select-option']} onChange={optionChangeHandler}>
                  <option>Select status</option>
                  <option value="day shift">Day shift</option>
                  <option value="night shift">Night Shift</option>
                </select>
            </td>
            <td>
                <button className="btn btn-outline-info" type='submit' onClick={inHandler}>Update</button>
            </td>
          </tr>
    )
}

export default WorkScheduleList;
