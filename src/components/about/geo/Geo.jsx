import React from 'react';
import GeoStyle from './Geo.module.css';

const Geo = (props) => {
  const { address } = props;
  return (
    <div className={GeoStyle.container}>
      <h3 className='orange'>GEO</h3>
      <div> <span className={GeoStyle.position}> LAT</span>:  {(address) ? (address.lat) : (null)} </div>
      <div> <span className={GeoStyle.position}> LNG</span>:  {(address) ? (address.lng) : (null)} </div>
      {/* <div> LAT: {(address) ? (address.lat) : (null)} </div>
      <div> LNG: {(address) ? (address.lng) : (null)} </div> */}
    </div>
  )
}

export default Geo;
