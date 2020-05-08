import React from 'react';
import About from '../../components/about/About'
import HeaderPage from '../../components/headerPage/HeaderPage';

import UserPageStyle from './UserPage.module.css';

import { connect } from 'react-redux';
import { axiosUsers } from '../../actions/userActions';

const UserPage = (props) => {
  const {
    users,
    match,
  } = props;

  const userPage = users.filter((user) => user._id == match.params.id);

  return (
    <div className={UserPageStyle.container}>

      {userPage.map((user) => {
        return (
          <div key={user._id} className={UserPageStyle.inner}>
            <HeaderPage avatar={user.avatar} name={user.name} username={user.username} email={user.email} />
            <About userId={user._id} phone={user.phone} website={user.website} company={user.company} address={user.address} />
          </div>
        )
      })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(UserPage);