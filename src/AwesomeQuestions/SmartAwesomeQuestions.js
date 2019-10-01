import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AwesomeQuestions from './AwesomeQuestions';
import { setInitialValues, resetForm } from '../AwesomeForm';
import {
  deleteQuestion,
  deleteAllQuestions,
  sortQuestions,
} from '../Questions';

const SmartAwesomeQuestions = () => {
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

export default SmartAwesomeQuestions;
