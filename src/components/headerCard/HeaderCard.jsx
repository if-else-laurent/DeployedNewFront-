import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar.jsx'
import { Link } from 'react-router-dom';
import HeaderCardStyle from './HeaderCard.module.css';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions/userActions';


const Header = (props) => {
  const { user, token } = props;

  const dispatch = useDispatch();

  return (
    <div className={HeaderCardStyle.container}>
      <div className={HeaderCardStyle.inner}>
        <UserAvatar className={HeaderCardStyle.avatar} avatar={user.avatar} />
        <div className={HeaderCardStyle.inner__item}>
          <h3 className={HeaderCardStyle.header}>
            User: <span className='orange'>{user.name}</span> ({user.username})
          </h3>
          <div>
            email: <a className='orange' href='#' >{user.email}</a>
          </div>
          <Link className='orange' to={'/' + user._id}>
            More
          </Link>
          <button className={`${HeaderCardStyle.deleteButton} orange`} to='/' onClick={() => dispatch(deleteUser(user._id, token))}>
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
