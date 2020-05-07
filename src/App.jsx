import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';

import { connect } from 'react-redux';
import { axiosUsers, loadToken } from '../src/actions/userActions';
import AuthPage from './pages/authPage/AuthPage'
import RegisterPage from './pages/registerPage/RegisterPage'



const App = (props) => {
  const { axiosUsers, token, loginLoading, message, error, loadToken } = props;

  useEffect(() => {
    loadToken();
  }, []);

  if (!!token) {
    return (
      <Router>
        <div className='app'>
          <div className='mainPage'>
            <Route exact path='/' render={(props) => <UsersPage {...props} token={token} axiosUsers={axiosUsers} />} />
            <Route exact path='/:id' render={(props) => <UserPage {...props} />} />
            <Redirect to='/' />
          </div>
        </div>
      </Router>
    )
  } return (
    <Router>
      <div className='app'>
        <div className='mainPage'>
          <Route exact path='/auth' render={(props) => <AuthPage {...props} loginLoading={loginLoading} message={message} error={error} />} />
          <Route exact path='/register' render={(props) => <RegisterPage {...props} loginLoading={loginLoading} message={message} error={error} />} />
          <Redirect to='/auth' />
        </div>
      </div>
    </Router>
  )

}

const mapStateToProps = (state) => ({
  token: state.userReducer.token,
  loginLoading: state.userReducer.loginLoading,
  error: state.userReducer.error,
  message: state.userReducer.message
})

const mapActions = { axiosUsers, loadToken };

export default connect(mapStateToProps, mapActions)(App); // Connect(props, откуда props)(component который подключаеться)
