import React from 'react';
import PropTypes from 'prop-types';
import ToggleView from '../../UILibrary/ToggleView';
import ButtonGroup from '../../UILibrary/ButtonGroup';
import { ButtonNeutral, ButtonNegative } from '../../UILibrary/Button';
import { Answer, AnswerToggle, QuestionContent } from './styled';

const QuestionToggleView = ({ question, onEdit, onDelete }) => {
  return (
    <QuestionContent>
      <ToggleView content={<Answer>{question.answer}</Answer>}>
        <AnswerToggle>
          <div>{question.question}</div>
          <ButtonGroup>
            <ButtonNeutral onClick={() => onEdit(question)}>Edit</ButtonNeutral>
            <ButtonNegative onClick={() => onDelete(question)}>
              Delete
            </ButtonNegative>
          </ButtonGroup>
        </AnswerToggle>
      </ToggleView>
    </QuestionContent>
  );
};

const questionType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
});

QuestionToggleView.propTypes = {
  question: questionType.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default QuestionToggleView;
