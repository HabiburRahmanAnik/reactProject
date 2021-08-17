import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminNavigation from './components/Layout/AdminNavigation';
import AddUser from './components/pages/AddUserForm';
import Dashboard from './components/pages/Dashboard';
import ViewUserList from './components/pages/viewUserList';
import useHttp from './components/hooks/use-http';
import { useState } from 'react';
import { useEffect } from 'react';
import NewUser from './components/pages/NewUser';
import Login from './components/pages/Login';
import RouteLink from './components/pages/RouteLink';
import ChangePassword from './components/pages/ChangePassword';

function App() {
  const [users, setUsers] = useState([]);
  const [userLoginData, setUserLoginData] = useState([]);

  const { sendRequest: fetchRequest } = useHttp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/login`,
        method: 'POST',
        body: { email: email, password: password },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      setUserLoginData
    );

    if (userLoginData.email === email && userLoginData.password === password) {
      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('id', userLoginData.id);
      localStorage.setItem('username', userLoginData.username);
      localStorage.setItem('password', userLoginData.password);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    const userLoggedInformation = localStorage.getItem('isLoggedIn');

    if (userLoggedInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    fetchRequest({ url: 'http://localhost:8000/api/list' }, setUsers);
  }, [fetchRequest]);

  const addUser = (userData) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/add`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      setUsers
    );
  };

  const editUser = (userData, id) => {
    fetchRequest(
      {
        url: `http://localhost:8000/api/edit/${id}`,
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      setUsers
    );
  };

  const deleteUser = (id) => {
    fetchRequest({ url: `http://localhost:8000/api/delete/${id}` }, setUsers);
  };

  const blockUser = (id) => {
    fetchRequest(
      { url: `http://localhost:8000/api/block/${id}`, method: 'POST' },
      setUsers
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

  return (
    <>
      <AdminNavigation isLogin={isLoggedIn} onLogout={logoutHandler} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        {localStorage.getItem('isLoggedIn') && (
          <Route path="/login" exact>
            <Redirect to="/admin/dashboard" />
          </Route>
        )}
        <Route path="/login">
          <Login onLogin={login} isLoggedIn={isLoggedIn} />
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
        <Route path="/admin/viewUserList" exact>
          <ViewUserList
            userlist={users}
            deleteCallBack={deleteUser}
            blockUser={blockUser}
            fetchUser={fetchUser}
          />
        </Route>
        <Route path="/logout" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/admin/changePassword" exact>
          <ChangePassword />
        </Route>
        <RouteLink />
        {!isLoggedIn && (
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        )}
      </Switch>
    </>
  );
}

export default App;
