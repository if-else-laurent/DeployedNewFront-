import React, { useEffect } from 'react';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const {
    axiosUsers,
    token
  } = props;

  useEffect(() => {
    axiosUsers(token);
  }, []);


  return (
    <UserList />
  )
}

export default UsersPage

