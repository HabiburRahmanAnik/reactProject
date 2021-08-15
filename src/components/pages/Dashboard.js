import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import './dass.css';

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
        {/* <div className="header">
            <div className='profile'>
                <img src="./165705284_1391399217860789_3212769307992041414_n.png" alt="" />
            </div>
        </div>
            <div className="profile-container" id='menu'>
                <ul>
                    <li style={{fontWeight:'bold',color:'black'}}>Habibur Rahman</li>
                    <li style={{color:'black'}}>My Profile</li>
                    <li style={{fontWeight:'bold',color:'black'}}>My Profile</li>
                </ul>
            </div> */}
        

        <div className='row'>
            <div className='column'>
                <div className='card card1'>
                    <h4>Doctor</h4>
                    <p>{users.doctor}</p>
                </div>
            </div>
            <div className='column'>
                <div className='card card2'>
                    <h4>Patient</h4>
                    <p>{users.patient}</p>
                </div>
            </div>
            <div className='column'>
                <div className='card card3'>
                    <h4>Receptionist</h4>
                    <p>{users.receptionist}</p>
                </div>
            </div>

        </div>
    </>
  );
};

export default Dashboard;
