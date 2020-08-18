import React from 'react';
import PropTypes from 'prop-types';

function UserHeader({ name, login, avatar_url, userHeaderState }){
    return(
        <div 
            id="user-header" 
            className={userHeaderState ? "show" : "hide"}    
        >
            <header>
                <img src={avatar_url} alt="Avatar do usuário"/>
                <p className="name">{name}</p>
                <p className="username">{login}</p>
            </header>
        </div>
    );
}

UserHeader.propTypes = {
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    userHeaderState: PropTypes.bool.isRequired,
};

export default UserHeader;