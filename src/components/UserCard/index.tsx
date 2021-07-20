import React from 'react';

import UserHeader from '../UserHeader';

import './styles.css';

interface UserCardProps {
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
    topLanguages: string[];
    userCardState: boolean;
}

const UserCard = ({ name, login, avatar_url, html_url, topLanguages }: UserCardProps) => {
    const hasTopLanguages = Boolean(topLanguages.length);

    return(
        <div id="user-card">
            <UserHeader
                name={name}
                login={login}
                avatar_url={avatar_url}
                id="card"
            />
            <div className="content">
                <main>
                    <p>Linguagem mais utilizada: </p>
                    
                    {
                        //se o array topLanguages nao for vazio, retorna seus valores
                        hasTopLanguages ? (
                            <>
                                <div className="top-languages">  
                                    <p></p>
                                    <p>
                                        {topLanguages[0]}
                                    </p>
                                </div>
                            </>
                        ) : 
                        <p className="not-found">
                            Não encontrada
                        </p>
                    }

                </main>
                <footer>
                    <a 
                    href={html_url} 
                    target="_blank"
                    rel="noopener noreferrer">
                        Ver mais
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default UserCard;