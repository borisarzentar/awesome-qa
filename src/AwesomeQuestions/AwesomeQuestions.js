import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonNeutral, ButtonNegative } from '../UILibrary/Button';
import ButtonGroup from '../UILibrary/ButtonGroup';
import QuestionToggleView from './QuestionToggleView';
import QuestionRow from './QuestionRow';
import NoQuestionsMessage from './NoQuestionsMessage';
import { setInitialValues, resetForm } from '../AwesomeForm';
import {
  deleteQuestion,
  deleteAllQuestions,
  sortQuestions,
} from '../Questions';

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

const AwesomeSmartQuestions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);
  const questionInEdit = useSelector(state => state.form.questionId);

  const onEditQuestion = question => {
    dispatch(setInitialValues(question));
  };

  const onDeleteQuestion = question => {
    if (questionInEdit === question.id) {
      dispatch(resetForm());
    }
    dispatch(deleteQuestion(question.id));
  };

  const onDeleteAllQuestions = () => {
    dispatch(resetForm());
    dispatch(deleteAllQuestions());
  };

  const onSortQuestions = () => {
    dispatch(sortQuestions());
  };

  return (
    <AwesomeQuestions
      questions={questions}
      onEditQuestion={onEditQuestion}
      onDeleteQuestion={onDeleteQuestion}
      onDeleteAllQuestions={onDeleteAllQuestions}
      onSortQuestions={onSortQuestions}
    />
  );
};

export default AwesomeSmartQuestions;
