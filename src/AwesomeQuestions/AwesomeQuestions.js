import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '../UILibrary/ButtonGroup';
import QuestionToggleView from './QuestionToggleView';
import { ButtonNeutral, ButtonNegative } from '../UILibrary/Button';
import QuestionRow from './QuestionRow';
import NoQuestionsMessage from './NoQuestionsMessage';

const AwesomeQuestions = ({
  questions,
  onEditQuestion,
  onDeleteQuestion,
  onDeleteAllQuestions,
  onSortQuestions,
}) => {
  return (
    <>
      {!questions.length && (
        <NoQuestionsMessage>No questions yet :-(</NoQuestionsMessage>
      )}
      {questions.map(question => (
        <QuestionRow key={question.id}>
          <QuestionToggleView
            question={question}
            onEdit={onEditQuestion}
            onDelete={onDeleteQuestion}
          />
        </QuestionRow>
      ))}
      {questions.length > 0 && (
        <ButtonGroup>
          <ButtonNeutral onClick={onSortQuestions}>
            Sort questions
          </ButtonNeutral>
          <ButtonNegative onClick={onDeleteAllQuestions}>
            Delete all questions
          </ButtonNegative>
        </ButtonGroup>
      )}
    </>
  );
};

const questionType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
});

AwesomeQuestions.propTypes = {
  questions: PropTypes.arrayOf(questionType.isRequired).isRequired,
  onEditQuestion: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onDeleteAllQuestions: PropTypes.func.isRequired,
  onSortQuestions: PropTypes.func.isRequired,
};

export default AwesomeQuestions;
