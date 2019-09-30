import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Toggle = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} type="button" className={className}>
      {children}
    </button>
  );
};

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledToggle = styled(Toggle)`
  z-index: 2;
  position: relative;
`;

export default StyledToggle;
