import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import View from './View';

const ToggleView = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(isViewOpen => !isViewOpen);
  };

  return (
    <>
      <Toggle onClick={toggleIsOpen}>
        {typeof children === 'function'
          ? children({ isOpen, toggleIsOpen })
          : children}
      </Toggle>
      <View isOpen={isOpen}>
        {typeof content === 'function'
          ? content({ isOpen, toggleIsOpen })
          : content}
      </View>
    </>
  );
};

ToggleView.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ToggleView;
