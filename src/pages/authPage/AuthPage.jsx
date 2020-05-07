import React, { useState, useEffect } from 'react'
import AuthPageStyle from './AuthPage.module.css'
import { loginUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import Message from '../../components/message/Message';
import Loading from '../../components/loading/Loading';
import { NavLink } from 'react-router-dom';


const AuthPage = (props) => {
  const { error, loginLoading, message } = props;

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className={AuthPageStyle.container}>
        <header className={AuthPageStyle.header}>
          <h2 className={`${AuthPageStyle.header__item} ${AuthPageStyle.header__active}`}> Login </h2>
          <h2 className={AuthPageStyle.header__item}> <NavLink className={AuthPageStyle.navLink} to='/register'> Register </NavLink>  </h2>
        </header>
        <div className={AuthPageStyle.inner}>
          <form onSubmit={handleSubmit} className={AuthPageStyle.form}>
            <label htmlFor='email'> Email: </label>
            <input disabled={loginLoading} type='email' name='email' onChange={(e) => changeHandler(e)} />
            <label htmlFor='password'> Password: </label>
            <input disabled={loginLoading} type='password' name='password' onChange={(e) => changeHandler(e)} />
            {(error || message) && <Message error={error} message={message} />}
            <button disabled={loginLoading} className={AuthPageStyle.button} onClick={() => dispatch(loginUser(form))}> Log in </button>
          </form>
        </div>
      </div>
      {loginLoading && <Loading />}
    </div>
  )
}

export default AuthPage
