import React from 'react';
import Contacts from './contacts/Contacts';
import Company from './company/Company';
import Address from './address/Address';
import Geo from './geo/Geo';
import AboutStyle from './About.module.css';
import { NavLink } from 'react-router-dom';

const About = (props) => {
  const {
    userId,
    phone,
    website,
    company,
    address,
  } = props;
  return (
    <div className={AboutStyle.container}>
      <h3 className={`${AboutStyle.header} orange`}>Information
        <NavLink to={`/${userId}/edit`}>
          <button className={AboutStyle.button}> edit </button>
        </NavLink>
      </h3>
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
