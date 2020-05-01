import React from 'react';

const UserAvatar = (props) => {
    const { className, avatar } = props;
    const defaultUrl = 'https://html5css.ru/bootstrap4/img_avatar1.png';
    return (
        <div className={className + ' ' + 'header__item'}>
            <img src={avatar ? avatar : defaultUrl} alt='avatar' />
        </div>
    )
}

export default UserAvatar;
