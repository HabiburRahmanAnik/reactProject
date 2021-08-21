import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import classes from './dashboard.module.css';


const Dashboard = () => {
    const {sendRequest } = useHttp();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = (data) => {
      setUsers(data);
    };
    sendRequest({ url: 'http://localhost:8000/api/dashboard' }, users);
  }, [sendRequest]);

  return (
    <>
        <div className={classes.row}>
            <div className={classes.column}>
                <div className={`${classes.card} ${classes.card1}`}>
                    <h4 >Doctor</h4>
                    <p>{users.doctor}</p>
                </div>
            </div>
            <div className={classes.column}>
                <div className={`${classes.card} ${classes.card2}`}>
                    <h4>Patient</h4>
                    <p>{users.patient}</p>
                </div>
            </div>
            <div className={classes.column}>
                <div className={`${classes.card} ${classes.card3}`}>
                    <h4>Receptionist</h4>
                    <p>{users.receptionist}</p>
                </div>
            </div>

        </div>
    </>
  );
};

export default Dashboard;
