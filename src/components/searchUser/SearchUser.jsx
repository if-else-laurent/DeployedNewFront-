import React from 'react';
import SearchUserStyle from './SearchUser.module.css'
import { searchUser, logOutUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';

const SearchUser = (props) => {
  const { setResSearch } = props;

  const dispatch = useDispatch();

  return (
    <div className={SearchUserStyle.container}>
      <h2 className={SearchUserStyle.header}> Search </h2>
      <div className={SearchUserStyle.inner}>
        Name: <input className='search__inner__input' type='text' onChange={(e) => setResSearch(e.target.value)} />
      </div>
      <button className={SearchUserStyle.button} onClick={() => dispatch(logOutUser())} > Log Out </button>
    </div>
  )
}

export default SearchUser;
