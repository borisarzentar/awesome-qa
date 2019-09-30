import styled from 'styled-components';
import { darken } from 'polished';
import Button from './Button';

export default styled(Button)`
  ${({ theme }) => {
    const neutralButton = theme.ui.buttons.neutral;
    return `
      color: ${neutralButton.textColor};
      border-color: ${neutralButton.borderColor};
      background-color: ${neutralButton.backgroundColor};

      &:hover {
        background-color: ${darken(0.1, neutralButton.backgroundColor)};
      }
      
      &:focus {
        box-shadow: 0 0 2px 1px ${neutralButton.focusColor};
      }
    `;
  }}
`;
