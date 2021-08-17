import React from 'react';
import CheckAvailableRoom from './CheckAvailableRoom';
import ManageSalary from './ManageSalary';
import RoomBooking from './RoomBooking';
import UpdateSalary from './UpdateSalary';
import UserReport from './UserReport';
import ViewDoctorReview from './ViewDoctorReview';
import ViewTransactionHistory from './ViewTransactionHistory';
import ViewUserDetails from './ViewUserDetails';
import WorkSchedule from './WorkSchedule';

const RouteLink = (props) => {
  return (
    <>
      <Route path="/admin/manageSalary" exact>
          <ManageSalary />
        </Route>
        <Route path="/admin/workSchedule" exact>
          <WorkSchedule />
        </Route>
        <Route path="/admin/manageSalary/:id" exact>
          <UpdateSalary />
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
    </>
  );
};

export default RouteLink;
