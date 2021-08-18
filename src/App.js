import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminNavigation from './components/Layout/AdminNavigation';
import Login from './components/pages/Login';
import RouteLink from './components/pages/RouteLink';
import AuthContext from './components/context/auth-context';


function App() {
  const ctx = useContext(AuthContext);

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
