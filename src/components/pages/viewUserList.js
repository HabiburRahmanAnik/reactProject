import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/user-context';
import './dass.css';
import UserList from './UserList';

const ViewUserList = (props) => {
    const utx = useContext(UserContext);

  return (
    <div>
      {utx.isLoading && <div className="loader"></div>}
     {!utx.isLoading && <table className="tables" style={{ marginTop: '150px' }}>
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
