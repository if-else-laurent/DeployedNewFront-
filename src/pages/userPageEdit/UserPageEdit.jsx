import React, { useState } from 'react';
// import EditAbout from '../../components/editAbout/EditAbout'
// import EditHeader from '../../components/editHeader/EditHeader';
import { Link } from 'react-router-dom';
import UserAvatar from '../../components/userAvatar/UserAvatar';

import UserPageEditStyle from './UserPageEdit.module.css';

import { connect } from 'react-redux';
import { axiosUsers } from '../../actions/userActions';

const UserPageEdit = (props) => {
  const {
    users,
    match,
  } = props;



  const UserPageEdit = users.filter((user) => user._id == match.params.id);

  const [form, setForm] = useState(UserPageEdit[0])
  // console.log(form)

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const ClickHandler = (e) => {
    e.preventDefault()

  }



  return (
    <div className={UserPageEditStyle.container}>
      <div key={form._id} className={UserPageEditStyle.inner}>

        <div>

          <div className={UserPageEditStyle.container__main}>
            <UserAvatar className={UserPageEditStyle.avatar} avatar={form.avatar} />
            <div className={UserPageEditStyle.container__item}>
              <h3 className={UserPageEditStyle.header}> Edit: </h3>
              <form className={UserPageEditStyle.form}>

                <div className={UserPageEditStyle.form_main}>
                  <label> Name: </label>
                  <input name='name' value={form.name} onChange={(e) => changeHandler(e)} />
                  <label> UserName: </label>
                  <input name='username' value={form.username} onChange={(e) => changeHandler(e)} />
                  <label> Email: </label>
                  <input name='email' value={form.email} onChange={(e) => changeHandler(e)} />
                </div>

              </form>
            </div>

          </div>

          <div className={UserPageEditStyle.container__about}>
            <form>
              <div className={UserPageEditStyle.about}>
                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> Contacts </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> Phone: </label>
                    <input name='phone' value={form.phone} onChange={(e) => changeHandler(e)} />
                    <label> Web site: </label>
                    <input name='website' value={form.website} onChange={(e) => changeHandler(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> Company </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> Company: </label>
                    <input name='company' value={form.company} onChange={(e) => changeHandler(e)} />
                    <label> CatchPhrase: </label>
                    <input name='catchPhrase' value={form.catchPhrase} onChange={(e) => changeHandler(e)} />
                    <label> BS: </label>
                    <input name='bs' value={form.bs} onChange={(e) => changeHandler(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> Address </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> Street: </label>
                    <input name='street' value={form.street} onChange={(e) => changeHandler(e)} />
                    <label> Suite: </label>
                    <input name='suite' value={form.suite} onChange={(e) => changeHandler(e)} />
                    <label> City: </label>
                    <input name='city' value={form.city} onChange={(e) => changeHandler(e)} />
                    <label> Zipcode: </label>
                    <input name='zipcode' value={form.zipcode} onChange={(e) => changeHandler(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> GEO </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> LAT: </label>
                    <input name='lat' value={form.lat} onChange={(e) => changeHandler(e)} />
                    <label> LNG: </label>
                    <input name='lng' value={form.ing} onChange={(e) => changeHandler(e)} />
                  </div>
                </div>
              </div>
              <button className={UserPageEditStyle.button} onClick={(e) => ClickHandler(e)}> Save </button>
            </form>

          </div>
          <Link className={`${UserPageEditStyle.linkReturn} orange`} to='/'>
            Return
          </Link>
        </div>
      </div>


    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(UserPageEdit);