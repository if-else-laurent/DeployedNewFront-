import React, { useState } from 'react';
// import EditAbout from '../../components/editAbout/EditAbout'
// import EditHeader from '../../components/editHeader/EditHeader';
import { Link } from 'react-router-dom';
import UserAvatar from '../../components/userAvatar/UserAvatar';

import UserPageEditStyle from './UserPageEdit.module.css';

import { connect } from 'react-redux';
import { axiosUsers, editUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';


const UserPageEdit = (props) => {
  const {
    users,
    match,
    message,
    error
  } = props;

  const dispatch = useDispatch()

  const user = users.filter((user) => user._id == match.params.id);
  const userForEdit = user[0]

  // console.log(userForEdit)

  const [form, setForm] = useState(userForEdit)
  const [company, setCompany] = useState((userForEdit.company) ? (userForEdit.company) : ({}))
  const [address, setAddress] = useState((userForEdit.address) ? (userForEdit.address) : ({}))


  // console.log(form)
  // console.log('company', company)
  // console.log('address', address)

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const changeHandlerCompany = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value })
  }

  const changeHandlerAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const ClickHandler = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.username) {
      const editedUser = { ...form, company, address }
      dispatch(editUser(editedUser))
      // console.log('click', editedUser)
    }
  }



  return (
    <div className={UserPageEditStyle.container}>
      <div key={form._id} className={UserPageEditStyle.inner}>

        <div>

          <div className={UserPageEditStyle.container__main}>
            <UserAvatar className={UserPageEditStyle.avatar} avatar={form.avatar} />
            <div className={UserPageEditStyle.container__item}>
              <h3 className={UserPageEditStyle.header}> Edit data: </h3>
              <form className={UserPageEditStyle.form}>

                <div className={UserPageEditStyle.form_main}>
                  <label> Name: </label>
                  <input name='name' value={form.name || ''} onChange={(e) => changeHandler(e)} />
                  <label> UserName: </label>
                  <input name='username' value={form.username || ''} onChange={(e) => changeHandler(e)} />
                  <label> Email: </label>
                  <input name='email' value={form.email || ''} onChange={(e) => changeHandler(e)} />
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
                    <input name='phone' value={form.phone || ''} onChange={(e) => changeHandler(e)} />
                    <label> Web site: </label>
                    <input name='website' value={form.website || ''} onChange={(e) => changeHandler(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> Company </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> Company: </label>
                    <input name='name' value={company.name || ''} onChange={(e) => changeHandlerCompany(e)} />
                    <label> CatchPhrase: </label>
                    <input name='catchPhrase' value={company.catchPhrase || ''} onChange={(e) => changeHandlerCompany(e)} />
                    <label> BS: </label>
                    <input name='bs' value={company.bs || ''} onChange={(e) => changeHandlerCompany(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> Address </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> Street: </label>
                    <input name='street' value={address.street || ''} onChange={(e) => changeHandlerAddress(e)} />
                    <label> Suite: </label>
                    <input name='suite' value={address.suite || ''} onChange={(e) => changeHandlerAddress(e)} />
                    <label> City: </label>
                    <input name='city' value={address.city || ''} onChange={(e) => changeHandlerAddress(e)} />
                    <label> Zipcode: </label>
                    <input name='zipcode' value={address.zipcode || ''} onChange={(e) => changeHandlerAddress(e)} />
                  </div>
                </div>

                <div className={UserPageEditStyle.about__item}>
                  <h4 className={UserPageEditStyle.about__header}> GEO </h4>
                  <div className={UserPageEditStyle.about__form}>
                    <label> LAT: </label>
                    <input name='lat' value={address.lat || ''} onChange={(e) => changeHandlerAddress(e)} />
                    <label> LNG: </label>
                    <input name='lng' value={address.lng || ''} onChange={(e) => changeHandlerAddress(e)} />
                  </div>
                </div>
              </div>
              <div className={UserPageEditStyle.footer}>
                <span className={UserPageEditStyle.message}> {message && <> {message}</>} </span>
                <span className={UserPageEditStyle.message}> {error && <> {error}</>} </span>
              </div>
              <button className={UserPageEditStyle.button} onClick={(e) => ClickHandler(e)}> Save </button>

            </form>

          </div>
          <Link className={`${UserPageEditStyle.linkReturn} orange`} to={`/${userForEdit._id}`}>
            Return
          </Link>
        </div>
      </div>


    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  message: state.userReducer.message,
  error: state.userReducer.error
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(UserPageEdit);