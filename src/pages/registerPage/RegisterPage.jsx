import React, { useState, useEffect } from 'react'
import RegisterPageStyle from './RegisterPage.module.css'
import { registerUser, setError } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import Message from '../../components/message/Message';
import Loading from '../../components/loading/Loading';
import { NavLink } from 'react-router-dom';


const RegisterPage = (props) => {
  const { error, loginLoading, message, clear } = props;

  useEffect(() => {
    clear()
  }, []);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '', password: ''
  })

  const [confirmPassword, setconfirmPassword] = useState('')

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const changePasswordHandler = (e) => {
    setconfirmPassword((e.target.value))
  }

  // console.log(confirmPassword)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length >= 6) {
      if ((form.password === confirmPassword)) {
        dispatch(registerUser(form))
      } else dispatch(setError('Passwords differ'))
    } else dispatch(setError('Min length of password 6 symbols'))
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
            <input disabled={loginLoading} autoFocus required placeholder='example@mail.com' type='email' name='email' onChange={(e) => changeHandler(e)} />
            <label htmlFor='password'> Password: </label>
            <input disabled={loginLoading} required type='password' name='password' onChange={(e) => changeHandler(e)} />
            <label htmlFor='password'> Confirm password: </label>
            <input disabled={loginLoading} required type='password' name='password' onChange={(e) => changePasswordHandler(e)} />
            {(error || message) && <Message error={error} message={message} />}
            <button disabled={loginLoading} className={RegisterPageStyle.button}> Register </button>
          </form>
        </div>
      </div>
      {loginLoading && <Loading />}
    </div>
  )
}

export default RegisterPage
