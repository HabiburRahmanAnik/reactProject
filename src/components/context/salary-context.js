import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useHttp from '../hooks/use-http';

const SalaryContext = React.createContext({
  isLoading: false,
  onSetSalary: () => {},
  salaries: [],
  onUpdateSalary:(salary, id)=>{}
});

export const SalaryContextProvider = (props) => {
  const { isLoading, sendRequest } = useHttp();
  const [salaries, setSalaries] = useState([]);

  const manageSalary = (data) => {
    setSalaries(data);
  };

  useEffect(() => {
    sendRequest(
      { url: 'http://localhost:8000/api/manageSalary' },
      manageSalary
    );
  }, [sendRequest]);

  const updateSalary = (data,id) => {
    sendRequest(
      {
        url: `http://localhost:8000/api/updateSalary/${id}`,
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }, setSalaries);
  };


  return (
    <SalaryContext.Provider
      value={{
        isLoading,
        salaries,
        onSetSalary: setSalaries,
        onUpdateSalary:updateSalary
      }}
    >
      {props.children}
    </SalaryContext.Provider>
  );
};

export default SalaryContext;
