import styled from 'styled-components';

export default styled.h2`
  ${({ theme }) => {
    const h2Style = theme.typography.h2;
    return `
      color: ${theme.ui.textColor};
      font-size: ${h2Style.fontSize};
      line-height: ${h2Style.lineHeight};
      font-weight: ${h2Style.fontWeight};
      margin: 0;
    `;
  }}
`;
