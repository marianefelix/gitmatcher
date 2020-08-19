import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ buttonState, children, onClick }){
    return(
        <div 
            className={ buttonState ? "show-button" : "hide-button" }
        >
            <button type="submit" onClick={onClick}>
                {children}
            </button>
        </div>
        
    );
}

Button.propTypes = {
    buttonState: PropTypes.bool.isRequired,
    onClick: PropTypes.func, 
}

export default Button;