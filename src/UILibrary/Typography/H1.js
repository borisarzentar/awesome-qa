import styled from 'styled-components';

export default styled.h1`
  ${({ theme }) => {
    const h1Style = theme.typography.h1;
    return `
      color: ${theme.ui.textColor};
      font-size: ${h1Style.fontSize};
      line-height: ${h1Style.lineHeight};
      font-weight: ${h1Style.fontWeight};
      margin: 0;
    `;
  }}
`;
