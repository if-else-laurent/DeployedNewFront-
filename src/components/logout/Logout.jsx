import React from 'react'
import LogoutStyle from './Logout.module.css'
import { logOutUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <div className={LogoutStyle.container}>
      <h2 className={LogoutStyle.header}> Profile </h2>
      <div className={LogoutStyle.inner}>
        <button className={LogoutStyle.button} onClick={() => dispatch(logOutUser())} > Log Out </button>
      </div>

    </div>
  )
}

export default Logout
