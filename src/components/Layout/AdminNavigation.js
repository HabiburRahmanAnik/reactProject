import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavigation = ({isLoggedIn,onLogout}) => {
    return (
           <div className={isLoggedIn? "side-bar" : ''}>
            <ul>
                {isLoggedIn && <h2 style={{color:'white',marginTop:'30px'}}>Welcome,</h2>}
                <h3 style={{color:'white'}}>{localStorage.getItem('username')}</h3>
                <br />
                {isLoggedIn && <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/addUser'>Add User</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/userReport'>User Report</NavLink></li>}
                {isLoggedIn && <li><NavLink to='/admin/changePassword'>Change Password</NavLink></li>}
                {isLoggedIn && <li onClick={onLogout}><NavLink to='/logout'>Logout</NavLink></li>}
            </ul>
        </div>
    );
}

export default AdminNavigation;
