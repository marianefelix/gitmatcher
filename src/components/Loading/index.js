import React from 'react';

import PropTypes from 'prop-types';

import loadingIcon from '../../assets/images/loading-icon.png';

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
    value: PropTypes.bool.isRequired,
};

export default Loading;