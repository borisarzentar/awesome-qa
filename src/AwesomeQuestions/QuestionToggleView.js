import React from 'react';
import PropTypes from 'prop-types';
import { ButtonNeutral, ButtonNegative } from '../UILibrary/Button';
import ToggleView from '../UILibrary/ToggleView';
import { Answer, AnswerToggle, QuestionContent } from './styled';
import ButtonGroup from '../UILibrary/ButtonGroup';

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
