import React from 'react';
import NotFoundStyle from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={NotFoundStyle.container}>
      <div className={NotFoundStyle.inner}>
        <span className='orange'> Oops! </span>
        User not found
        <span className='orange'> :( </span>
      </div>
    </div>
  )
}

export default NotFound;
