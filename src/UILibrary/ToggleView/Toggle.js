import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Toggle = ({ children, onClick, className }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div onClick={onClick} className={className}>
      {children}
    </div>
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
