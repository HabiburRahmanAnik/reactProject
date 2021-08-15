import React,{useEffect, useState} from 'react'
import useHttp from '../hooks/use-http';
import { useParams } from 'react-router-dom';
import UpdateSalaryForm from './UpdateSalaryForm';

const UpdateSalary = () => {
   const [user, setUser] = useState([]);
  const params = useParams();
  const id = params.id;
  const { sendRequest } = useHttp();

  useEffect(() => {
    const users = (data) => {
      setUser(data);
    };
    sendRequest({ url: `http://localhost:8000/api/manageSalary/${id}` }, users);
  }, [sendRequest, id]);

  const updateSalary = (data)=>{
    const users = (data) => {
      setUser(data);
    };

    sendRequest({
      url:`http://localhost:8000/api/updateSalary/${id}`,
      method:'POST',
      body:data,
      headers: {
        'Content-Type': 'application/json',
      },
    },users)
  }

    return (
        <>
        {user.map((u) => (
        <UpdateSalaryForm
          key={u.id}
          username={u.username}
          email= {u.email}
          currentSalary ={u.salary}
          updateSalary={updateSalary}
        />
      ))}
        </>
    )
}

export default UpdateSalary
