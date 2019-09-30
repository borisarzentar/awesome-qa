import styled from 'styled-components';
import { darken } from 'polished';
import Button from './Button';

export default styled(Button)`
  ${({ theme }) => {
    const positiveButton = theme.ui.buttons.positive;
    return `
      color: ${positiveButton.textColor};
      border-color: ${positiveButton.borderColor};
      background-color: ${positiveButton.backgroundColor};

      &:hover {
        background-color: ${darken(0.1, positiveButton.backgroundColor)};
      }
      
      &:focus {
        box-shadow: 0 0 2px 1px ${positiveButton.focusColor};
      }
    `;
  }}
`;
