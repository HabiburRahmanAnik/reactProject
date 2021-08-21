import React from 'react';
import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';

const UserContext = React.createContext({
  users: [],
  setUsers: () => {},
  onBlockUser: (id) => {},
  onDeleteUser: (id) => {},
  isLoading:'',
  onAddUser:()=>{}
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const {isLoading, sendRequest: fetchRequest } = useHttp();


  useEffect(() => {
    const transformedData = (data)=>{
      setUsers(data);
    }
    fetchRequest({ url: 'http://localhost:8000/api/list' }, transformedData);
  }, [fetchRequest]);

  const deleteUserHandler = (id) => {
    const transformedData = (data)=>{
      setUsers(data);
    }
    fetchRequest({ url: `http://localhost:8000/api/delete/${id}` }, transformedData);
  };

  const blockUserHandler = (id) => {
    const transformedData = (data)=>{
      setUsers(data);
    }
    fetchRequest(
      { url: `http://localhost:8000/api/block/${id}`, method: 'POST' },
      transformedData
    );
  };

  const addUser = (userData) => {
    const transformedData = (data)=>{
      setUsers(data);
    }
    fetchRequest(
      {
        url: `http://localhost:8000/api/add`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      transformedData
    );
    console.log(userData);
  };


  return (
    <UserContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        onDeleteUser: deleteUserHandler,
        onBlockUser:blockUserHandler,
        isLoading,
        onAddUser:addUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
