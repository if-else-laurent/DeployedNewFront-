import React from 'react';
import ContactsStyle from './Contacts.module.css';

const Contacts = (props) => {
  const { phone, website } = props;
  return (
    <div className={ContactsStyle.container}>
      <h3> Contacts </h3>
      <div> <span className={ContactsStyle.position}> Number</span>:  {(phone) ? (phone) : (null)} </div>
      <div> <span className={ContactsStyle.position}> Personal page</span>:  <a className='orange' href='#'>{(website) ? (website) : (null)}</a> </div>
      {/* <div>Number: {phone}</div>
      <div>Personal page: {website}</div> */}
    </div>
  )
}

export default Contacts;
