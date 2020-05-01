import React, { useState } from 'react'
import ModalAddStyle from './ModalAdd.module.css'
import { useDispatch } from 'react-redux';

const ModalAdd = (props) => {
  const { setModal } = props;

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      // dispatch(addUser({ name, username, email }));
      window.location = '/';  //Перенаправляет на homePage( '/' )
    }
    return
  }
  return (
    <div>
      <div className={ModalAddStyle.container}>
      </div>
      <div className={ModalAddStyle.modalContainer}>
        <div className={ModalAddStyle.modalContainerInner}>
          <h2 className={ModalAddStyle.header} > Add New User </h2>
          <form onSubmit={handleSubmit} className={ModalAddStyle.form}>
            <label htmlFor='name'> Name: </label>
            <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor='email'> Username: </label>
            <input type='text' name='username' onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='email'> Email: </label>
            <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <button> Add User </button>
          </form>
          <button onClick={() => setModal(false)}> Cancel </button>
          {/* <button> Close </button> */}
        </div>
      </div>
    </div>
  )
}

export default ModalAdd
