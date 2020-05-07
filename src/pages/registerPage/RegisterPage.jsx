import React, { useState } from 'react'
import RegisterPageStyle from './RegisterPage.module.css'
import { registerUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import Message from '../../components/message/Message';
import Loading from '../../components/loading/Loading';
import { NavLink } from 'react-router-dom';


const RegisterPage = (props) => {
  const { error, loginLoading } = props;

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
      <div className={RegisterPageStyle.container}>
        <header className={RegisterPageStyle.header}>
          <h2 className={RegisterPageStyle.header__item}> <NavLink className={RegisterPageStyle.navLink} to='/auth'> Login </NavLink>  </h2>
          <h2 className={`${RegisterPageStyle.header__item} ${RegisterPageStyle.header__active}`}> Register </h2>
        </header>
        <div className={RegisterPageStyle.inner}>
          <form onSubmit={handleSubmit} className={RegisterPageStyle.form}>
            <label htmlFor='email'> Email: </label>
            <input disabled={loginLoading} type='email' name='email' onChange={(e) => changeHandler(e)} />
            <label htmlFor='password'> Password: </label>
            <input disabled={loginLoading} type='password' name='password' onChange={(e) => changeHandler(e)} />
            {error && <Message error={error} />}
            <div className={RegisterPageStyle.button_container}>
              <button disabled={loginLoading} className={RegisterPageStyle.button} onClick={() => dispatch(registerUser(form))}> Register </button>
            </div>
          </form>
        </div>
      </div>
      {loginLoading && <Loading />}
    </div>
  )
}

export default RegisterPage
