import React from 'react';
import CompanyStyle from './Company.module.css';

const Company = (props) => {
  const { company } = props;
  return (
    <div className={CompanyStyle.container}>
      <h3> Company </h3>
      <div> <span className={CompanyStyle.position}> Company</span>:  {(company) ? (company.name) : (null)} </div>
      <div> <span className={CompanyStyle.position}> Catch phrase</span>:  {(company) ? (company.catchPhrase) : (null)} </div>
      <div> <span className={CompanyStyle.position}> Bs</span>:  {(company) ? (company.bs) : (null)} </div>
      {/* <div> Company: {(company) ? (company.name) : (null)} </div>
      <div> Catch phrase: {(company) ? (company.catchPhrase) : (null)} </div>
      <div> BS: {(company) ? (company.bs) : (null)} </div> */}
    </div>
  )
}

export default Company;
