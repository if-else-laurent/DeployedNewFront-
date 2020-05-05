import React, { useState } from 'react'
import AuthPageStyle from './AuthPage.module.css'
import { registerUser, loginUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import Loading from '../../components/loading/Loading';
import Message from '../../components/message/Message';

const AuthPage = (props) => {
  const { loginLoading, message, error } = props;

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
        <h2 className={AuthPageStyle.header}> Sign up </h2>
        <div className={AuthPageStyle.inner}>
          <form onSubmit={handleSubmit} className={AuthPageStyle.form}>
            <label htmlFor='email'> Email: </label>
            <input disabled={loginLoading} type='email' name='email' onChange={(e) => changeHandler(e)} />
            <label htmlFor='password'> Password: </label>
            <input disabled={loginLoading} type='password' name='password' onChange={(e) => changeHandler(e)} />
            <Message message={message} error={error} />
            <div className={AuthPageStyle.button_container}>
              <button className={AuthPageStyle.button} onClick={() => dispatch(loginUser(form))}> Log in </button>
              <button className={AuthPageStyle.button} onClick={() => dispatch(registerUser(form))}> Register </button>
            </div>
          </form>
        </div>
      </div>
      {loginLoading && <Loading />}
    </div>
  )
}

export default AuthPage
