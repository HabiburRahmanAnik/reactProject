import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import WorkScheduleList from './workScheduleList';

const WorkSchedule = () => {
  const [workSchedule, setWorkSchedule] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [id,setId] = useState('');
  const {sendRequest } = useHttp();

  useEffect(() => {
    const schedule = (data) => {
      setWorkSchedule(data);
    };
    sendRequest({ url: 'http://localhost:8000/api/workSchedule' }, schedule);
  }, [sendRequest]);


  const optionChangeHandler = (option) => {
    setSelectedOption(option);
  };

  const findId = (id) => {
    setId(id);
  };

  const submitHandler =(e)=>{
    e.preventDefault();

    const data={
      workShift:selectedOption
    }

    const reports = (data) => {
      setWorkSchedule(data);
    };
    sendRequest(
      {
        url: `http://localhost:8000/api/work/${id}`,
        method:"POST",
        body:data,
        headers:{
          "Content-Type":'application/json'
        },
      },reports);

  }



  return (
    <form onSubmit={submitHandler}>
      <table className="tables" style={{ marginTop: '150px', minWidth: '60%' }}>
        <thead>
          <th>Username</th>
          <th>Type</th>
          <th>Status</th>
          <th>change Schedule</th>
          <th>Action</th>
        </thead>
        <tbody>
          {workSchedule.map((schedule) => (
            <WorkScheduleList
              key={schedule.id}
              id={schedule.id}
              username={schedule.username}
              status={schedule.workshift}
              type={schedule.type}
              findId={findId}
              onOptionChange={optionChangeHandler}
            />
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default WorkSchedule;
