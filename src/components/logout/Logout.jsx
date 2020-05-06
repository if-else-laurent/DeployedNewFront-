import React from 'react'
import LogoutStyle from './Logout.module.css'
import { logOutUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';

const Logout = (props) => {
  const { email } = props
  const dispatch = useDispatch()

  return (
    <div className={LogoutStyle.container}>
      <h2 className={LogoutStyle.header}> Profile </h2>
      <div className={LogoutStyle.inner}>
        <p className={`${LogoutStyle.item} ${LogoutStyle.email}`}> apofiuz@gmail.com </p>
        <button className={`${LogoutStyle.button} ${LogoutStyle.item}`} onClick={() => dispatch(logOutUser())} > Log Out </button>
      </div>

    </div>
  )
}

export default Logout
