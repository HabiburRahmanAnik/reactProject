import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/dass.css';

const AdminNavigation = ({isLogin}) => {

    return (
            <div className={isLogin? "side-bar" : ''}>
            <ul>
                <br />
                {isLogin && <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/addUser'>AddUser</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>}
                {isLogin && <li><NavLink to='/admin/userReport'>User Report</NavLink></li>}
            </ul>
        </div>
    )
}

export default AdminNavigation
