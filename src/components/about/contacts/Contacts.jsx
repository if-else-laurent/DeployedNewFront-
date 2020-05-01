import React from 'react';
import ContactsStyle from './Contacts.module.css';

const Contacts = (props) => {
  const { phone, website } = props;
  return (
    <div className={ContactsStyle.container}>
      <h4 className='contacts'> Contacts </h4>
      <div>Number: {phone}</div>
      <div>Personal page: {website}</div>
    </div>
  )
}

export default Contacts;
