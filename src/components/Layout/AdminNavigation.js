import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../pages/dass.css';

const AdminNavigation = ({isLogin,onLogout}) => {

    return (
            <div className={isLogin? "side-bar" : ''}>
            <ul>
                {isLogin && <h2 style={{color:'white',marginTop:'30px'}}>Welcome,</h2>}
                <h3 style={{color:'white'}}>{localStorage.getItem('username')}</h3>
                <br />
                {isLogin && <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/addUser'>Add User</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/userReport'>User Report</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/changePassword'>Change Password</NavLink></li>}
                {isLogin && <li onClick={onLogout}><NavLink to='/logout'>Logout</NavLink></li>}
            </ul>
        </div>
    )
}

export default AdminNavigation
