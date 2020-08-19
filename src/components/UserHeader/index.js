import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function UserHeader({ name, login, avatar_url, id }){
    return(
        <header
            id={id ? `user-header-${id}` : "user-header"}
            //rever
            className="user-header"
        >
            <img src={avatar_url} alt="Avatar do usuário"/>
            <p className="name">{name}</p>
            <p className="username">@{login}</p>
        </header>
    );
}

UserHeader.propTypes = {
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default UserHeader;