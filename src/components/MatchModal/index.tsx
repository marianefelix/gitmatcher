import React, { Fragment } from 'react';

import fireIcon from '../../assets/icons/loading-icon.png';

import './styles.css';

interface MatchModalProps {
  msg: string;
  value: boolean;
  children: React.ReactNode;
}

const MatchModal = ({ msg, value, children }: MatchModalProps) => {
  return value ? (
    <div className="match-modal">
      <div className="modal-content">
        <div className="message-match">
          {msg === 's' ? (
            <Fragment>
              <div>
                <p>Deu match!</p>
                <img src={fireIcon} alt="" />
              </div>
              <p>
                Vocês utilizam a mesma linguagem na maioria dos seus projetos 🤩
              </p>
            </Fragment>
          ) : (
            <>
              <p style={{ color: 'black' }}>Não deu match...</p>
              <p>A linguagem que vocês mais utilizam não é a mesma 😕</p>
            </>
          )}
        </div>

        <div className="close-modal">{children}</div>
      </div>
    </div>
  ) : null;
};

export default MatchModal;
