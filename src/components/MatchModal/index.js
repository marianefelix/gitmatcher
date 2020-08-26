import React from 'react';
import PropTypes from 'prop-types';

import fireIcon from '../../assets/images/loading-icon.png';

import './styles.css';

function MatchModal({ msg, value, children }){

    return value ? (
        <div
            className="match-modal"
        >
            <div className="modal-content"> 
                <div className="message-match">
                    {msg === 's' ?
                        (
                        <>
                            <div>
                                <p>Deu match!</p>
                                <img src={fireIcon} alt=""/>
                            </div>
                            <p>Vocês utilizam a mesma linguagem na maioria dos seus projetos 🤩</p>                
                        </>
                        )
                        :
                        <>
                            <p style={{color: "black"}}>Não deu match...</p>
                            <p>A linguagem que vocês mais utilizam não é a mesma 😕</p>                
                        </>
                    }
                </div>
                
                <div className="close-modal">
                    {children}
                </div>
            </div>
        </div>
        
    )
    : null;
}

MatchModal.propTypes = {
    msg: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
};

export default MatchModal;