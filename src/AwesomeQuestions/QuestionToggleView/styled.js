import styled from 'styled-components';
import { get } from '../../utils';
import Text from '../../UILibrary/Typography/Text';

export const Answer = styled(Text)(({ theme }) => {
  const { answer } = theme.ui;
  return `
    color: ${answer.textColor};
    background-color: ${answer.backgroundColor};
    box-sizing: border-box;
    padding: 10px;
  `;
});

export const AnswerToggle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${get('ui.answerToggle.textColor')};
  background-color: ${get('ui.answerToggle.backgroundColor')};

  &:hover {
    cursor: pointer;
  }
`;

export const QuestionContent = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${get('ui.borderColor')};
  border-radius: 4px;
`;
