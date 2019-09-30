import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const HtmlButton = ({ onClick, ...rest }) => {
  const handleClick = event => {
    event.stopPropagation();
    onClick(event);
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <button type="button" onClick={handleClick} {...rest} />;
};

HtmlButton.propTypes = {
  onClick: PropTypes.func,
};

HtmlButton.defaultProps = {
  onClick: () => {},
};

const Button = styled(HtmlButton)`
  ${({ theme }) => {
    const defaultButton = theme.ui.buttons.default;
    return `
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 4px;
      border-width: 2px;
      border-style: solid;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      color: ${defaultButton.textColor};
      border-color: ${defaultButton.borderColor};
      background-color: ${defaultButton.backgroundColor};

      &:hover {
        background-color: ${darken(0.1, defaultButton.backgroundColor)};
      }
      
      &:focus {
        outline: 0;
        box-shadow: 0 0 2px 1px ${defaultButton.focusColor};
      }
    `;
  }}
`;

export default Button;
