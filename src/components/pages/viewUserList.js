import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/user-context';
import UserList from './UserList';
import classes from './TableCommon.module.css'

const ViewUserList = (props) => {
    const utx = useContext(UserContext);

  return (
    <div>
      {utx.isLoading && <div className={classes.loader}></div>}
     {!utx.isLoading && <table className={classes.tables} style={{ marginTop: '150px' }}>
        <thead>
          <th>Username</th>
          <th>Email</th>
          <th>Type</th>
          <th>Active</th>
          <th>Action</th>
        </thead>

        <tbody>
          {utx.users.map((user) => (
            <UserList
              key={user.id}
              id={user.id}
              username={user.username}
              email={user.email}
              type={user.type}
              active={user.active}
              fetchUser={props.fetchUser}
            />
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default ViewUserList;
