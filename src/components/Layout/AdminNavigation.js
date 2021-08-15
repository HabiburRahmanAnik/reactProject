import React from 'react';
import { NavLink } from 'react-router-dom';
import '../pages/dass.css';

const AdminNavigation = () => {
    return (
            <div className='side-bar'>
            <ul>
                <br />
                <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink to='/admin/addUser'>AddUser</NavLink></li>
                <li><NavLink to='/admin/viewUserList'>View User List</NavLink></li>
                <li><NavLink to='/admin/manageSalary'>Manage Salary</NavLink></li>
                <li><NavLink to='/admin/workSchedule'>Work Schedule</NavLink></li>
                <li><NavLink to='/admin/patientRoom'>Check available room</NavLink></li>
                <li><NavLink to='/admin/doctorReview'>View doctor review</NavLink></li>
                <li><NavLink to='/admin/transactionHistory'>Transaction history</NavLink></li>
                <li><NavLink to='/admin/userReport'>User Report</NavLink></li>
            </ul>
        </div>
    )
}

export default AdminNavigation
