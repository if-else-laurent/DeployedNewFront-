import React from 'react';
import CompanyStyle from './Company.module.css';

const Company = (props) => {
  const { company } = props;
  return (
    <div className={CompanyStyle.container}>
      <h4> Company </h4>
      <div> Company: {(company) ? (company.name) : (null)} </div>
      <div> Catch phrase: {(company) ? (company.catchPhrase) : (null)} </div>
      <div> BS: {(company) ? (company.bs) : (null)} </div>
    </div>
  )
}

export default Company;
