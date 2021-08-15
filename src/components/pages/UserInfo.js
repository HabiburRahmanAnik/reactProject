import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { useParams } from 'react-router-dom';
import AddUser from './AddUser';

const UserInfo = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { sendRequest: fetchRequest } = useHttp();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const details = (data) => {
      setUserDetails(data);
    };
    fetchRequest({ url: `http://localhost:8000/api/userlist/${id}` }, details);
  }, [fetchRequest, id]);

  


  return (
      <div>
          {userDetails.map((user) => (
       <AddUser
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          type={user.type}
          active={user.active}
          blood ={user.bloodGroup}
          address = {user.address}
          phone = {user.phone}
        />
        
      ))}
      </div>
  );
};

export default UserInfo;
