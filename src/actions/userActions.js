import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_AXIOS_USERS,
  ERROR_LOAD_AXIOS_USERS,
  ERROR_REGISTER_USER,
  REGISTER_USER,
  BEGIN_LOGIN_USER,
  LOGIN_USER,
  ERROR_LOGIN_USER,
  LOGOUT_USER,
  LOAD_TOKEN,
} from './types'
import axios from 'axios';



export function axiosUsers(token) {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOAD_AXIOS_USERS });
      const headers = { authToken: token }
      // const res = await axios.get('/api/', {
      const res = await axios.get(`${process.env.REACT_APP_API}/`, {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: AXIOS_USERS,
        payload: res.data.reverse(),
      });
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err });
    }
  }
};



export function deleteUser(id, token) {
  return async dispatch => {
    try {
      // const res = await axios.delete('http://localhost:5000/' + id)
      const headers = { authToken: token }
      const res = await axios.delete(`${process.env.REACT_APP_API}/` + id, {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: DELETE_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
    }
  }
}


export function addUser(newUser, token) {
  return async dispatch => {
    try {
      const data = JSON.parse(localStorage.getItem('userData'))
      const user = { ...newUser, owner: data.userId }

      const headers = { authToken: token }
      const res = await axios.post(`${process.env.REACT_APP_API}/add`, user, {
        headers: headers
      })
      dispatch({
        type: ADD_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
    }

  }
}


export const registerUser = (newUser) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/register`, newUser)
      dispatch({
        type: REGISTER_USER,
        payload: 'Registration successful',
      })
    }
    catch (err) {
      dispatch({ type: ERROR_REGISTER_USER, payload: 'Error registration' })
    }
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOGIN_USER })
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, user)

      const token = res.data
      const userId = res.data.userId

      localStorage.setItem('userData', JSON.stringify({ token, userId }))
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOGIN_USER, payload: 'Uncorrect data' })
    }
  }
}

export const loadToken = () => {
  return async dispatch => {
    try {
      const data = JSON.parse(localStorage.getItem('userData'))
      console.log('loadtoken', data)
      if (data && data.token) {
        dispatch({
          type: LOAD_TOKEN,
          payload: data.token
        })
      }

    }
    catch (err) {

    }
  }
}

export const logOutUser = () => {
  return async dispatch => {
    try {
      localStorage.removeItem('userData')
      dispatch({
        type: LOGOUT_USER,
        payload: null
      })
    }
    catch (err) {

    }
  }
}