import React from 'react';

import PropTypes from 'prop-types';

import loadingIcon from '../../assets/images/fire-loading.png';

import './styles.css';

function Loading({ value, msg }){
    return value ? (
        //ajeitar css
        <div className="loading">
            <div>
                <img src={loadingIcon} alt="Ícone de fogo"/>
                <img src={loadingIcon} alt="Ícone de fogo"/>
                <img src={loadingIcon} alt="Ícone de fogo"/>
            </div>

            { msg && (
                <div className="msg">
                    <p>Verificando compatibilidade...</p>
                </div>
            )}
        </div>
    ) : null;
}

Loading.propTypes = {
    value: PropTypes.bool.isRequired,
    msg: PropTypes.bool,
};

export default Loading;