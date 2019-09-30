import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const View = ({ children, className, isOpen }) => {
  const viewRef = useRef();
  const originalHeight = useRef();
  const [height, setHeight] = useState('0px');

  useLayoutEffect(() => {
    const childView = viewRef.current.children[0];
    const { height: childHeight } = childView.getBoundingClientRect();
    originalHeight.current = `${childHeight}px`;
  }, [viewRef, children]);

  useEffect(() => {
    if (isOpen) {
      setHeight(originalHeight.current);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={className} style={{ height }} ref={viewRef}>
      {children}
    </div>
  );
};

View.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const StyledView = styled(View)`
  z-index: 1;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.3s ease-in-out;
  overflow-y: scroll;
`;

export default StyledView;
