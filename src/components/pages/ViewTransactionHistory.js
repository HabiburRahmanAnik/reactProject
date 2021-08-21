import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import TransactionList from './TransactionList';
import classes from  './TableCommon.module.css'

const ViewTransactionHistory = () => {
  const { isLoading, error, sendRequest: fetchRequest } = useHttp();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const transformUser = (userData) => {
      setTransaction(userData);
    };
    fetchRequest({ url: 'http://localhost:8000/api/transaction' }, transformUser);
  }, [fetchRequest]);


  return (
    <>
    {isLoading && <div className={classes.loader}></div>}
    {!isLoading && <table className={classes.tables} style={{ marginTop: '150px', minWidth: '65%' }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Bank Name</th>
          <th>Customer Name</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((trans) => (
          <TransactionList
            key={trans.id}
            bankname={trans.bankname}
            amount={trans.amount}
            date={trans.date}
            customerName={trans.customer_name}
            withdrawMethod = {trans.withdrawmethod}
            isLoading={isLoading}
            error={error}
          />
        ))}
      </tbody>
    </table>}
    </>
  );
};

export default ViewTransactionHistory;
