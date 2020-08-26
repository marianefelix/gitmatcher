import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function UserHeader({ name, login, avatar_url, id }){
    return(
        <header
            id={id ? `user-header-${id}` : "user-header"}
            className="user-header"
        >
            <img src={avatar_url} alt="Avatar do usuário"/>
            <p className="name">{name}</p>
            <p className="username">@{login}</p>
        </header>
    );
}

UserHeader.propTypes = {
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
    id: PropTypes.string,
};

export default UserHeader;