import React from 'react';
import AddressStyle from './Address.module.css';

const Address = (props) => {
  const { address } = props;
  return (
    <div className={AddressStyle.container}>
      <h4>Address</h4>
      <div> Street: {(address) ? (address.street) : (null)} </div>
      <div> Suite: {(address) ? (address.suite) : (null)} </div>
      <div> City: {(address) ? (address.city) : (null)} </div>
      <div> Zipcode: {(address) ? (address.zipcode) : (null)} </div>
    </div>
  )
}

export default Address
