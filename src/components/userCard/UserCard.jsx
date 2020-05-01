import React from 'react';
import HeaderCard from '../headerCard/HeaderCard';
import UserCardStyle from './UserCard.module.css';

const UserCard = (props) => {
  const { user, token } = props;

  return (
    <div className={UserCardStyle.container}>
      <HeaderCard user={user} token={token} />
    </div>)

}

export default UserCard;
