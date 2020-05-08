import React from 'react';
import AddressStyle from './Address.module.css';

const Address = (props) => {
  const { address } = props;
  return (
    <div className={AddressStyle.container}>
      <h3>Address</h3>
      <div> <span className={AddressStyle.position}> Street</span>:  {(address) ? (address.street) : (null)} </div>
      <div> <span className={AddressStyle.position}> Suite</span>:  {(address) ? (address.suite) : (null)} </div>
      <div> <span className={AddressStyle.position}> City</span>:  {(address) ? (address.city) : (null)} </div>
      <div> <span className={AddressStyle.position}> Zipcode</span>:  {(address) ? (address.zipcode) : (null)} </div>
    </div>
  )
}

export default Address
