import styled from 'styled-components';

const scaleFromPoint = '20px';

export const Content = styled.div`
  ${({ isShown, theme }) => {
    const { tooltip } = theme.ui;
    return `
      box-sizing: border-box;
      position: absolute;
      top: 100%;
      right: -100%;
      min-width: 150px;
      max-width: 250px;
      margin-top: 8px;
      padding: 10px;
      transform: scale(${isShown ? 1 : 0});
      transform-origin: ${scaleFromPoint} 0;
      transition: transform 0.1s ease-in-out;
      color: ${tooltip.textColor};
      background-color: ${tooltip.backgroundColor};
      border-width: 2px;
      border-style: solid;
      border-color: ${tooltip.borderColor};
      border-radius: 4px;

      &:after,
      &:before {
        position: absolute;
        bottom: 100%;
        left: ${scaleFromPoint};
        height: 0;
        width: 0;
        border: solid transparent;
        content: ' ';
        pointer-events: none;
      }

      &:after {
        border-bottom-color: ${tooltip.backgroundColor};
        border-width: 10px;
        margin-left: -10px;
      }
      &:before {
        border-bottom-color: ${tooltip.borderColor};
        border-width: 13px;
        margin-left: -13px;
      }
    `;
  }}
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  z-index: 3;
`;
