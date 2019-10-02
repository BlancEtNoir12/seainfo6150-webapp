import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button onClick={() => alert(props.info.slug)}>
                show article slug
            </button>
    );
};

Button.propTypes = {
    info: PropTypes.object.isRequired
};

export default Button;