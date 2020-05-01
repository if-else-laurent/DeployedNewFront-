import React, { useState } from 'react';
import AddUserStyle from './AddUser.module.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/userActions';
import ModalAdd from '../modalAdd/ModalAdd';
import { useEffect } from 'react';



const AddUser = (props) => {
  const { token } = props;

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [modal, setModal] = useState(false);

  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(addUser({ name, username, email }, token));
      // window.location = '/';  //Перенаправляет на homePage( '/' )
    }
    return
  }


  return (
    <div className={AddUserStyle.container}>
      <h2 className={AddUserStyle.header}> Add New User </h2>
      <div className={AddUserStyle.inner}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'> Name: </label>
          <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
          <label htmlFor='email'> Username: </label>
          <input type='text' name='username' onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor='email'> Email: </label>
          <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
          <button className={AddUserStyle.button}> Add User </button>
          {/* <button onClick={() => setModal(true)}> ADD </button> */}
        </form>
        {/* {(modal && ModalAdd) ? (<ModalAdd setModal={setModal} />) : ('')} */}
      </div>
    </div>
  )
}

export default AddUser;
