import React from 'react';
import PropTypes from 'prop-types';

import UserHeader from '../UserHeader';

function UserCard({ name, login, avatar_url, bio, html_url, topLanguages, userCardState }){
    //testar
    const hasBio = Boolean(bio);
    const hasTopLanguages = Boolean(topLanguages.length);

    return(
        <div 
            id="user-card"
            className={userCardState ? "show" : "hide"}
        >
            <UserHeader
                name={name}
                login={login}
                avatar_url={avatar_url}
                userHeaderState={true}
            />
            <main>
                {hasBio ? <p className="bio">{bio}</p> : <p className="bio">Sem descrição</p>}
                {
                    //se o array topLanguages nao for vazio, retorna seus valores
                    hasTopLanguages && topLanguages.map(language => {
                        <p key={`language-${language}`} className="top-languages">
                            {language}
                        </p>
                    })
                }
            </main>
            <footer>
                <a href={html_url} target="_blank">Ver mais</a>
            </footer>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    topLanguages: PropTypes.arrayOf(PropTypes.string),
    userCardState: PropTypes.bool.isRequired,
}

export default UserCard;