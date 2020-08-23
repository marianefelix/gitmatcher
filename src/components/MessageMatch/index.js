import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function MessageMatch({ msg, value }){
    return value ? (
        <div className="message-match">
            <p>{msg}</p>
        </div>
        
    )
    : null;
}

MessageMatch.propTypes = {
    msg: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
};

export default MessageMatch;