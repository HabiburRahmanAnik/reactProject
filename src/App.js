import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminNavigation from './components/Layout/AdminNavigation';
import AddUser from './components/pages/AddUser';
import ViewUserList from './components/pages/viewUserList';
import useHttp from './components/hooks/use-http';
import { useState } from 'react';
import NewUser from './components/pages/NewUser';
import Login from './components/pages/Login';
import RouteLink from './components/pages/RouteLink';
import AuthContext from './components/context/auth-context';
import UserContext from './components/context/user-context';


function App() {
  const ctx = useContext(AuthContext);
  const {users,setUsers} = useContext(UserContext);
  const { sendRequest: fetchRequest } = useHttp();

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
      <AdminNavigation isLogin={ctx.isLoggedIn} onLogout={ctx.onLogout} />
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
          <Login onLogin={ctx.onLogin} isLoggedIn={ctx.isLoggedIn} />
        </Route>
        <Route path="/admin/addUser" exact>
          <AddUser status="add"/>
        </Route>
        <Route path="/admin/editUser/:id" exact>
          <NewUser status="edit" user={user} />
        </Route>
        <Route path="/admin/viewUserList" exact>
          <ViewUserList
            fetchUser={fetchUser}
          />
        </Route>
        <Route path="/logout" exact>
          <Redirect to="/login" />
        </Route>
        <RouteLink />
        {!ctx.isLoggedIn && (
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        )}
      </Switch>
    </>
  );
}

export default App;
