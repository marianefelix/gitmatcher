import React from 'react';

import PropTypes from 'prop-types';

import loadingIcon from '../../assets/images/fire-loading.png';

import './styles.css';

function Loading({ value }){
    return value ? (
        <div className="loading">
            <img src={loadingIcon} alt="Ícone de fogo"/>
            <img src={loadingIcon} alt="Ícone de fogo"/>
            <img src={loadingIcon} alt="Ícone de fogo"/>
        </div>
    ) : null;
}

Loading.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Loading;