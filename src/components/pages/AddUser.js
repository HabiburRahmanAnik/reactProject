import React from 'react';
import { useParams } from 'react-router-dom';
import AddUserForm from './AddUserForm';

const AddUser = (props) => {
  const params = useParams();
  const id = params.id;

  return (
    <>
       <AddUserForm
        onEditUser={props.onEditUser}
        username={props.username}
        email={props.email}
        phone={props.phone}
        active={props.active}
        id={id}
        status={props.status === 'add' ? 'add' : 'edit'}
      />
    </>
  );
};

export default AddUser;
