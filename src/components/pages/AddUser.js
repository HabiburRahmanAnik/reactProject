import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/user-context';
import useHttp from '../hooks/use-http';
import AddUserForm from './AddUserForm';

const AddUser = (props) => {
  const utx = useContext(UserContext);
  const params = useParams();
  const id = params.id;
  const { isLoading, sendRequest: fetchRequest } = useHttp();

  const addUser = (userData) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/add`,
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
       <AddUserForm
        onAddUser={addUser}
        onEditUser={props.onEditUser}
        username={props.username}
        email={props.email}
        phone={props.phone}
        active={props.active}
        id={id}
        status={props.status === 'add' ? 'add' : 'edit'}
        isLoading={isLoading}
      />
    </>
  );
};

export default AddUser;
