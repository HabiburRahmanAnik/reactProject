import React from 'react';
import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';

const UserContext = React.createContext({
  users: [],
  setUsers: () => {},
  onBlockUser: (id) => {},
  onDeleteUser: (id) => {},
  user:[],
  onFetchUser:(id)=>{},
  isLoading:''
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const {isLoading, sendRequest: fetchRequest } = useHttp();

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

  const [user, setUser] = useState([]);

  const fetchUser = (id) => {
    const transformUser = (userData) => {
      setUser(userData);
    };
    fetchRequest(
      { url: `http://localhost:8000/api/userlist/${id}` },
      transformUser
    );
  };

  return (
    <UserContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        onDeleteUser: deleteUserHandler,
        onBlockUser:blockUserHandler,
        onFetchUser:fetchUser,
        user:user,
        isLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
