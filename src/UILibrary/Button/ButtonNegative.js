import styled from 'styled-components';
import { darken } from 'polished';
import Button from './Button';

export default styled(Button)`
  ${({ theme }) => {
    const negativeButton = theme.ui.buttons.negative;
    return `
      color: ${negativeButton.textColor};
      border-color: ${negativeButton.borderColor};
      background-color: ${negativeButton.backgroundColor};

      &:hover {
        background-color: ${darken(0.1, negativeButton.backgroundColor)};
      }
      
      &:focus {
        box-shadow: 0 0 2px 1px ${negativeButton.focusColor};
      }
    `;
  }}
`;
