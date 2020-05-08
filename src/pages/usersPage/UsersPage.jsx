import React, { useEffect } from 'react';
import UserList from '../../components/userList/UserList';


const UsersPage = (props) => {
  const {
    axiosUsers,
    token,
    clear,
  } = props;

  useEffect(() => {
    axiosUsers(token);
    clear()
  }, []);


  return (
    <UserList />
  )
}

export default UsersPage

