import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';
import UserPageEdit from './pages/userPageEdit/UserPageEdit'

import { connect } from 'react-redux';
import { axiosUsers, loadToken, clear } from '../src/actions/userActions';
import AuthPage from './pages/authPage/AuthPage'
import RegisterPage from './pages/registerPage/RegisterPage'



const App = (props) => {
  const { axiosUsers,
    token,
    loginLoading,
    message,
    error,
    loadToken,
    clear } = props;

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
            <Route exact path='/:id/edit' render={(props) => <UserPageEdit {...props} />} />
            <Redirect to='/' />
          </div>
        </div>
      </Router>
    )
  } return (
    <Router>
      <div className='app'>
        <div className='mainPage'>
          <Route exact path='/auth' render={(props) => <AuthPage {...props} loginLoading={loginLoading} message={message} error={error} clear={clear} />} />
          <Route exact path='/register' render={(props) => <RegisterPage {...props} loginLoading={loginLoading} message={message} error={error} clear={clear} />} />
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

const mapActions = { axiosUsers, loadToken, clear };

export default connect(mapStateToProps, mapActions)(App); // Connect(props, откуда props)(component который подключаеться)
