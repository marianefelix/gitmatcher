import React from 'react';

import loadingIcon from '../../assets/images/loading-icon.png';

import './styles.css';

interface LoadingProps {
    value: boolean;
}

const Loading = ({ value }: LoadingProps) => {
    return value ? (
        <div className="loading">
            <img src={loadingIcon} alt="Ícone de fogo"/>
            <img src={loadingIcon} alt="Ícone de fogo"/>
            <img src={loadingIcon} alt="Ícone de fogo"/>
        </div>
    ) : null;
}

export default Loading;