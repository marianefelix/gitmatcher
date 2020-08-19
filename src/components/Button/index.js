import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonState, children, onClick }){
    return(
        <button 
            type="submit"
            className={ buttonState ? "show-button" : "hide-button" }
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    buttonState: PropTypes.bool.isRequired,
    onClick: PropTypes.func, 
}

export default Button;