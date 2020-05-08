import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
  ERROR_EDIT_USER,
  BEGIN_LOAD_AXIOS_USERS,
  ERROR_LOAD_AXIOS_USERS,
  ERROR_REGISTER_USER,
  BEGIN_REGISTER_USER,
  REGISTER_USER,
  BEGIN_LOGIN_USER,
  LOGIN_USER,
  ERROR_LOGIN_USER,
  LOGOUT_USER,
  LOAD_TOKEN,
  CLEAR_ERROR_MESSAGE,
} from './types'
import axios from 'axios';



export function axiosUsers(token) {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOAD_AXIOS_USERS });
      const headers = { authToken: token }
      const res = await axios.get(`${process.env.REACT_APP_API}/`, {
        headers: headers
      })
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
      const headers = { authToken: token }
      const res = await axios.delete(`${process.env.REACT_APP_API}/` + id, {
        headers: headers
      })
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

export function editUser(editUser) {
  return async dispatch => {
    try {
      const data = await JSON.parse(localStorage.getItem('userData'))

      const headers = { authToken: data.token }
      const res = await axios.post(`${process.env.REACT_APP_API}/${editUser._id}/edit`, editUser, {
        headers: headers
      })
      dispatch({
        type: EDIT_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_EDIT_USER, payload: err })
    }

  }
}


export const registerUser = (newUser) => {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_REGISTER_USER })
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/register`, newUser)
      dispatch({
        type: REGISTER_USER,
        payload: 'Registration successful',
      })
    }
    catch (err) {
      dispatch({ type: ERROR_REGISTER_USER, payload: 'Registration failed' })
    }
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOGIN_USER })
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, user)

      const token = res.data.token
      const userId = res.data.userId
      const email = res.data.email
      localStorage.setItem('userData', JSON.stringify({ token, userId, email }))

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
      if (data && data.token) {
        dispatch({
          type: LOAD_TOKEN,
          payload: data
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
        payload: null,
      })
    }
    catch (err) {

    }
  }
}

export const clear = () => {
  return async dispatch => {
    try {
      dispatch({
        type: CLEAR_ERROR_MESSAGE,
      })
    }
    catch (err) {

    }
  }
}