import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminNavigation from './components/Layout/AdminNavigation';
import AddUser from './components/pages/AddUserForm';
import CheckAvailableRoom from './components/pages/CheckAvailableRoom';
import Dashboard from './components/pages/Dashboard';
import ManageSalary from './components/pages/ManageSalary';
import UserReport from './components/pages/UserReport';
import ViewDoctorReview from './components/pages/ViewDoctorReview';
import ViewTransactionHistory from './components/pages/ViewTransactionHistory';
import ViewUserList from './components/pages/viewUserList';
import WorkSchedule from './components/pages/WorkSchedule';
import useHttp from './components/hooks/use-http';
import { useState } from 'react';
import { useEffect } from 'react';
import ViewUserDetails from './components/pages/ViewUserDetails';
import BlockUser from './components/pages/BlockUser';
import NewUser from './components/pages/NewUser';
import RoomBooking from './components/pages/RoomBooking';
import UpdateSalary from './components/pages/UpdateSalary';
import Login from './components/pages/Login';

function App() {
  const [users, setUsers] = useState([]);

  const { sendRequest: fetchRequest } = useHttp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInformation = localStorage.getItem('isLoggedIn');

    if (userLoggedInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const transformUser = (userData) => {
      setUsers(userData);
    };
    fetchRequest({ url: 'http://localhost:8000/api/list' }, transformUser);
  }, [fetchRequest]);

  const addUser = (userData) => {
    const transformUser = (userData) => {
      setUsers(userData);
    };
    fetchRequest(
      {
        url: `http://localhost:8000/api/add`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      transformUser
    );
  };

  const [user, setUser] = useState([]);

  const fetchUser = (id) => {
    const transformUser = (userData) => {
      setUser(userData);
    };
    fetchRequest(
      { url: `http://localhost:8000/api/userlist/${id}` },
      transformUser
    );
  };

  const editUser = (userData, id) => {
    const transformUser = (userData) => {
      setUsers(userData);
    };
    fetchRequest(
      {
        url: `http://localhost:8000/api/edit/${id}`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      transformUser
    );
  };

  const deleteUser = (id) => {
    const transformUser = (userData) => {
      setUsers(userData);
    };
    fetchRequest(
      { url: `http://localhost:8000/api/delete/${id}` },
      transformUser
    );
  };

  const blockUser = (id) => {
    const transformUser = (userData) => {
      setUsers(userData);
    };
    fetchRequest(
      { url: `http://localhost:8000/api/block/${id}`, method: 'POST' },
      transformUser
    );
  };

  // let content = <p></p>;
  // const userInfo = localStorage.getItem('isLoggedIn');

  // if (userInfo === '1') {
  //   content = (
  //     <Route path="/login" exact>
  //       <Redirect to="/admin/dashboard" />
  //     </Route>
  //   );
  // }

  return (
    <>
      <AdminNavigation isLogin={isLoggedIn} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        { localStorage.getItem('isLoggedIn') &&
          <Route path="/login" exact>
            <Redirect to="/admin/dashboard" />
          </Route>
        }
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/admin/dashboard" exact>
          <Dashboard />
        </Route>
        
        <Route path="/admin/addUser" exact>
          <AddUser status="add" addUser={addUser} />
        </Route>
        <Route path="/admin/editUser/:id" exact>
          <NewUser status="edit" editUser={editUser} user={user} />
        </Route>
        <Route path="/admin/block/:id" exact>
          <BlockUser />
        </Route>
        <Route path="/admin/viewUserList" exact>
          <ViewUserList
            userlist={users}
            deleteCallBack={deleteUser}
            blockUser={blockUser}
            fetchUser={fetchUser}
          />
        </Route>
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
      </Switch>
    </>
  );
}

export default App;
