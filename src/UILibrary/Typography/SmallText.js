import styled from 'styled-components';

export default styled.p`
  ${({ theme }) => {
    const textStyle = theme.typography.smallText;
    return `
      color: ${theme.ui.textColor};
      font-size: ${textStyle.fontSize};
      line-height: ${textStyle.lineHeight};
      font-weight: ${textStyle.fontWeight};
      margin: 0;
    `;
  }}
`;
