import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';

import { connect } from 'react-redux';
import { axiosUsers } from '../src/actions/userActions';
import AuthPage from './pages/authPage/AuthPage';



const App = (props) => {
  const { axiosUsers, users, token, loginLoading, message } = props;

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
          <Route exact path='/auth' render={(props) => <AuthPage {...props} loginLoading={loginLoading} message={message} />} />
          <Redirect to='/auth' />
        </div>
      </div>
    </Router>
  )

}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  token: state.userReducer.token,
  loginLoading: state.userReducer.loginLoading,
  error: state.userReducer.error,
  message: state.userReducer.message
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(App); // Connect(props, откуда props)(component который подключаеться)
