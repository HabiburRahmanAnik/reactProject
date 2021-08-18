import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/auth-context';


const AdminNavigation = () => {
    const authCtx = useContext(AuthContext);
    return (
            <div className={authCtx.isLoggedIn? "side-bar" : ''}>
            <ul>
                {authCtx.isLoggedIn && <h2 style={{color:'white',marginTop:'30px'}}>Welcome,</h2>}
                <h3 style={{color:'white'}}>{localStorage.getItem('username')}</h3>
                <br />
                {authCtx.isLoggedIn && <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/addUser'>Add User</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/userReport'>User Report</NavLink></li>}
                {authCtx.isLoggedIn && <li><NavLink to='/admin/changePassword'>Change Password</NavLink></li>}
                {authCtx.isLoggedIn && <li onClick={authCtx.onLogout}><NavLink to='/logout'>Logout</NavLink></li>}
            </ul>
        </div>
    )
}

export default AdminNavigation
