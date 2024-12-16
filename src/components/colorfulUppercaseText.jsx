import React from 'react';
import PropTypes from 'prop-types';

const ColorfulUppercaseText = ({ text, color, className = '' }) => {
  return (
    <p className={className} style={{ color: color, textTransform: 'uppercase' }}>
      {text}
    </p>
  );
};

ColorfulUppercaseText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ColorfulUppercaseText;