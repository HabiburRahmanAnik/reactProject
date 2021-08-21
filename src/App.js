import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminRouteLink from './components/pages/AdminRouteLink';
import AdminNavigation from './components/Layout/AdminNavigation';
import AuthContext from './components/context/auth-context';
import Login from './components/pages/Login';

function App() {
  const ctx = useContext(AuthContext);

  const content = localStorage.getItem('type');

  return (
    <>
      <AdminNavigation isLoggedIn={ctx.isLoggedIn} onLogout={ctx.onLogout} type={content}/>
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
        {localStorage.getItem('isLoggedIn')  && content==='admin' && <AdminRouteLink/>}
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
