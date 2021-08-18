import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/user-context';
import useHttp from '../hooks/use-http';
import AddUser from './AddUser';

const NewUser = () => {
  const utx = useContext(UserContext);
  const { sendRequest: fetchRequest } = useHttp();

  const editUser = (userData, id) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/edit/${id}`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      utx.setUsers
    );
  };

  return (
    <>
      {utx.user.map((u) => (
        <AddUser
          key={u.id}
          status="edit"
          onEditUser={editUser}
          username={u.username}
          email={u.email}
          phone={u.phone}
          active={u.active}
        />
      ))}
    </>
  );
};

export default NewUser;
