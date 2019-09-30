import styled from 'styled-components';
import Text from '../UILibrary/Typography/Text';

export default styled(Text)`
  ${({ theme }) => {
    const { colors } = theme;
    const { borderRadius } = theme.ui;
    return `
      color: ${colors.white};
      background-color: ${colors.negative};
      border-radius: ${borderRadius};
    `;
  }}
  padding: 20px;
`;
