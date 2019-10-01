import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, editQuestion } from '../Questions';
import { resetForm } from './actions';
import ValidationError from './ValidationError';
import AwesomeForm from './AwesomeForm';

const SmartAwesomeForm = () => {
  const dispatch = useDispatch();
  const questionInEdit = useSelector(state => state.form.questionId);
  const isEditMode = useSelector(state => state.form.isEditMode);
  const initialValues = useSelector(state => state.form.initialValues);

  const onSubmit = useCallback(
    values => {
      if (questionInEdit !== null) {
        dispatch(editQuestion(questionInEdit, values));
      } else {
        dispatch(addQuestion(values));
      }
      dispatch(resetForm());
    },
    [questionInEdit, dispatch]
  );

  const onReset = useCallback(() => {
    dispatch(resetForm());
  }, [dispatch]);

  const validation = useCallback(values => {
    const errors = {};
    if (values.question === '') {
      errors.question = 'Question is mandatory field';
    }
    if (values.answer === '') {
      errors.answer = 'Answer is mandatory field';
    }
    if (Object.keys(errors).length) {
      throw new ValidationError(errors);
    }
  }, []);

  return (
    <AwesomeForm
      isEditMode={isEditMode}
      initialValues={initialValues}
      onSubmit={onSubmit}
      onReset={onReset}
      validation={validation}
    />
  );
};

export default SmartAwesomeForm;
