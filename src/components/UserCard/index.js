import React from 'react';
import PropTypes from 'prop-types';

import UserHeader from '../UserHeader';

import './styles.css';

function UserCard({ name, login, avatar_url, bio, html_url, topLanguages, userCardState }){
    //testar
    const hasBio = Boolean(bio);
    const hasTopLanguages = Boolean(topLanguages.length);

    return(
        <div 
            id="user-card"
            className={userCardState ? "show-user-card" : "hide-user-card"}
        >
            <UserHeader
                name={name}
                login={login}
                avatar_url={avatar_url}
                userHeaderState={true}
                id="card"
            />
            <div className="content">
                <div className="main">
                    {/*hasBio ? <p className="bio">{bio}</p> : <p className="bio">Sem descrição</p>*/}
                    {
                        //se o array topLanguages nao for vazio, retorna seus valores
                        hasTopLanguages && (
                            <>
                                <p>Linguagem mais utilizada: </p>
                                <div className="top-languages">  
                                    <p></p>
                                    <p>
                                        {topLanguages[0]}
                                    </p>
                                </div>
                            </>
                        )

                        /*topLanguages.map(language => { 
                            return (
                                <div key={language} className="language">
                                    <p></p>
                                    <p>
                                        {language}
                                    </p>

                                </div>
                            );        
                        })
                        */
                    }

                </div>
                <div className="footer">
                    <a href={html_url} target="_blank">Ver mais</a>
                </div>
            </div>
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