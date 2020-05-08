import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
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
} from '../actions/types'

const initialState = {
  users: [],
  loading: true,
  error: false,
  token: null,
  loginLoading: false,
  message: null,
  email: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case BEGIN_LOAD_AXIOS_USERS:
      return {
        ...state,
        loading: true,
      }
    case AXIOS_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      }
    case ERROR_LOAD_AXIOS_USERS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        users: action.payload
      }
    case ADD_USER:
      return {
        ...state,
        users: action.payload
      }
    case EDIT_USER:
      return {
        ...state,
        users: action.payload,
        message: 'Changes saved'
      }
    case BEGIN_REGISTER_USER:
      return {
        ...state,
        loginLoading: true,
        error: null,
      }
    case REGISTER_USER:
      return {
        ...state,
        error: null,
        message: action.payload,
        loginLoading: false,
      }
    case ERROR_REGISTER_USER:
      return {
        ...state,
        error: action.payload,
        message: '',
        loginLoading: false,
      }
    case BEGIN_LOGIN_USER:
      return {
        ...state,
        loginLoading: true,
        message: null,
        error: null,
      }
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        email: action.payload.email,
        loginLoading: false,
      }
    case ERROR_LOGIN_USER:
      return {
        ...state,
        loginLoading: false,
        error: action.payload,
        message: null,
      }
    case LOAD_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      }
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        email: null,
        userId: null,
        error: null,
        message: null
      }
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        message: null,
        error: null,
      }
    default:
      return state;
  }
} 