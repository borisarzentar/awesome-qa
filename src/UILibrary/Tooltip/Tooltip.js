import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Content, Container } from './styled';

const Tooltip = ({ children, content, showDelay, hideDelay }) => {
  const [isShown, setIsShown] = useState(false);
  const showTimeout = useRef(null);
  const hideTimeout = useRef(null);

  const triggerShow = () => {
    if (hideTimeout.current !== null) {
      clearTimeout(hideTimeout.current);
    }
    if (showDelay !== null) {
      showTimeout.current = setTimeout(() => {
        setIsShown(true);
        showTimeout.current = null;
      }, showDelay);
    } else {
      setIsShown(true);
    }
  };

  const triggerHide = () => {
    if (showTimeout.current !== null) {
      clearTimeout(showTimeout.current);
    }
    if (hideDelay !== null) {
      hideTimeout.current = setTimeout(() => {
        setIsShown(false);
        hideTimeout.current = null;
      }, hideDelay);
    } else {
      setIsShown(false);
    }
  };

  return (
    <Container>
      <span onMouseEnter={triggerShow} onMouseLeave={triggerHide}>
        {children}
      </span>
      <Content
        isShown={isShown}
        onMouseEnter={triggerShow}
        onMouseLeave={triggerHide}
      >
        {content}
      </Content>
    </Container>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  showDelay: PropTypes.number,
  hideDelay: PropTypes.number,
};

Tooltip.defaultProps = {
  showDelay: 300,
  hideDelay: 200,
};

export default Tooltip;
