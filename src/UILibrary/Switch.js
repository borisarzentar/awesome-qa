import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from '../utils';

const Outer = styled.div`
  width: 35px;
  height: 20px;
  border-radius: 15px;
  background-color: ${get('ui.switch.backgroundColor')};
  border-width: 2px;
  border-style: solid;
  border-color: ${get('ui.switch.borderColor')};
  touch-action: none;
`;

const Inner = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${get('ui.switch.color')};
  transform: ${({ value }) => (value ? 'translateX(0px)' : 'translateX(15px)')};
  transition: transform 0.1s ease-out;
`;

const Switch = ({ value, onChange }) => {
  return (
    <Outer onClick={onChange}>
      <Inner value={value} />
    </Outer>
  );
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
