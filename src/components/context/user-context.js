import React from 'react';
import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';

const UserContext = React.createContext({
  users: [],
  setUsers: () => {},
  onBlockUser: (id) => {},
  onDeleteUser: (id) => {},
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const { sendRequest: fetchRequest } = useHttp();

  useEffect(() => {
    fetchRequest({ url: 'http://localhost:8000/api/list' }, setUsers);
  }, [fetchRequest]);

  const deleteUserHandler = (id) => {
    fetchRequest({ url: `http://localhost:8000/api/delete/${id}` }, setUsers);
  };

  const blockUserHandler = (id) => {
    fetchRequest(
      { url: `http://localhost:8000/api/block/${id}`, method: 'POST' },
      setUsers
    );
  };

  return (
    <UserContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        onDeleteUser: deleteUserHandler,
        onBlockUser:blockUserHandler
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
