import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AdminNavigation.module.css'

const AdminNavigation = ({isLoggedIn,onLogout,type}) => {

    let content =<p></p>;

    if(isLoggedIn && type==='admin'){
        content =
        <ul>
            <h2 style={{color:'white',marginTop:'30px'}}>Welcome,</h2>
            <h3 style={{color:'white'}}>{localStorage.getItem('username')}</h3>
            <br />
            <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li><NavLink to='/admin/addUser'>Add User</NavLink></li>
            <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>
            <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>
            <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>
            <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>
            <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>
            <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>
            <li><NavLink to='/admin/userReport'>User Report</NavLink></li>
            <li><NavLink to='/admin/changePassword'>Change Password</NavLink></li>
            <li onClick={onLogout}><NavLink to='/logout'>Logout</NavLink></li>
        </ul>
    }
    return (
           <div className={isLoggedIn && type==='admin' ? classes['side-bar'] : ''}>
            {content}
        </div>
    );
}

export default AdminNavigation;
