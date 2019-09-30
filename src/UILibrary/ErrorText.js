import styled from 'styled-components';

export default styled.p(({ theme }) => {
  const { error } = theme.ui;
  return `
    color: ${error.textColor};
    position: absolute;
    top: 100%;
    margin: 0;
    font-size: 12px;
    line-height: 16px;
  `;
});
