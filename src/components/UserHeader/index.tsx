import React from 'react';

import './styles.css';

interface UserHeaderProps {
    name: string;
    login: string;
    avatar_url: string;
    id: string;
}

const UserHeader = ({ name, login, avatar_url, id }: UserHeaderProps) => {
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

export default UserHeader;