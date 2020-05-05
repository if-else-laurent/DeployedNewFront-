import React from 'react';
import SearchUserStyle from './SearchUser.module.css'

const SearchUser = (props) => {
  const { setResSearch } = props;


  return (
    <div className={SearchUserStyle.container}>
      <h2 className={SearchUserStyle.header}> Search </h2>
      <div className={SearchUserStyle.inner}>
        Name: <input className='search__inner__input' type='text' onChange={(e) => setResSearch(e.target.value)} />
      </div>
    </div>
  )
}

export default SearchUser;
