import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ buttonState, children, onClick }){
    return(
        <div 
            className={`button ${buttonState}`}
        >
            <button type="submit" onClick={onClick}>
                {children}
            </button>
        </div>
        
    );
}

Button.propTypes = {
    buttonState: PropTypes.string.isRequired,
    onClick: PropTypes.func, 
}

export default Button;