import React from 'react';
import AddUser from './AddUserForm';

const NewUser = (props) => {
  return (
    <>
      {props.user.map((u) => (
        <AddUser
          key={u.id}
          status="edit"
          editUser={props.editUser}
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
