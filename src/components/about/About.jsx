import React from 'react';
import Contacts from './contacts/Contacts';
import Company from './company/Company';
import Address from './address/Address';
import Geo from './geo/Geo';
import AboutStyle from './About.module.css';

const About = (props) => {
  const {
    phone,
    website,
    company,
    address,
  } = props;
  return (
    <div className={AboutStyle.container}>
      <h3 className={`${AboutStyle.header} orange`}>Information </h3>
      <div className={AboutStyle.inner}>
        <Contacts phone={phone} website={website} />
        <Company company={company} />
        <Address address={address} />
        <Geo address={address} />
      </div>
    </div>
  )
}

export default About;
