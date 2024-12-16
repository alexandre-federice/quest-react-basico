import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, className }) => {
    const handleClick = () => {
        alert(`A label desse botão é ${label}!`);
    };

    return (
        <button className={className} onClick={handleClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;