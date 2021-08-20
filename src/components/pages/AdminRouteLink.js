import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AddUser from './AddUser';
import {SalaryContextProvider} from '../context/salary-context';
import ChangePassword from './ChangePassword';
import CheckAvailableRoom from './CheckAvailableRoom';
import Dashboard from './Dashboard';
import DeleteUser from './DeleteUser';
import ManageSalary from './ManageSalary';
import NewUser from './NewUser';
import RoomBooking from './RoomBooking';
import UpdateSalary from './UpdateSalary';
import UserReport from './UserReport';
import ViewDoctorReview from './ViewDoctorReview';
import ViewTransactionHistory from './ViewTransactionHistory';
import ViewUserDetails from './ViewUserDetails';
import ViewUserList from './viewUserList';
import WorkSchedule from './WorkSchedule';

const AdminRouteLink = () => {
  return (
    <>
      <Route path="/admin/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/admin/addUser" exact>
        <AddUser status="add" />
      </Route>
      <Route path="/admin/editUser/:id" exact>
        <NewUser status="edit" />
      </Route>
      <Route path="/admin/deleteUser/:id" exact>
        <DeleteUser/>
      </Route>
      <Route path="/admin/viewUserList" exact>
        <ViewUserList />
      </Route>
      <Route path="/logout" exact>
        <Redirect to="/login" />
      </Route>
      <SalaryContextProvider>
      <Route path="/admin/manageSalary" exact>
        <ManageSalary />
      </Route>
      <Route path="/admin/manageSalary/:id" exact>
        <UpdateSalary />
      </Route>
      </SalaryContextProvider>
      <Route path="/admin/workSchedule" exact>
        <WorkSchedule />
      </Route>
      <Route path="/admin/doctorReview" exact>
        <ViewDoctorReview />
      </Route>
      <Route path="/admin/transactionHistory" exact>
        <ViewTransactionHistory />
      </Route>
      <Route path="/admin/userReport" exact>
        <UserReport />
      </Route>
      <Route path="/admin/patientRoom" exact>
        <CheckAvailableRoom />
      </Route>
      <Route path="/admin/patientRoom/:id" exact>
        <RoomBooking />
      </Route>
      <Route path="/admin/viewDetails/:id" exact>
        <ViewUserDetails />
      </Route>
      <Route path="/admin/changePassword" exact>
        <ChangePassword />
      </Route>
    </>
  );
};

export default AdminRouteLink;
