import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../UILibrary/Form';
import Label from '../UILibrary/Label';
import Input from '../UILibrary/Input';
import TextArea from '../UILibrary/TextArea';
import FormGroup from '../UILibrary/FormGroup';
import ButtonGroup from '../UILibrary/ButtonGroup';
import ErrorText from '../UILibrary/ErrorText';
import { ButtonPositive, ButtonNegative } from '../UILibrary/Button';
import { addQuestion, editQuestion } from '../Questions';
import { resetForm } from './actions';
import ValidationError from './ValidationError';

function AwesomeForm({
  isEditMode,
  onReset,
  onSubmit,
  initialValues,
  validation,
}) {
  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={validation}
    >
      {({ values, handleChange, handleSubmit, handleReset, errors }) => (
        <form onSubmit={handleSubmit}>
          <FormGroup vertical>
            <Label htmlFor="question">Question:</Label>
            <Input
              id="question"
              name="question"
              value={values.question}
              onChange={handleChange}
            />
            {!!errors.question && <ErrorText>{errors.question}</ErrorText>}
          </FormGroup>
          <FormGroup vertical>
            <Label htmlFor="answer">Answer:</Label>
            <TextArea
              id="answer"
              name="answer"
              value={values.answer}
              onChange={handleChange}
            />
            {!!errors.answer && <ErrorText>{errors.answer}</ErrorText>}
          </FormGroup>
          {!isEditMode && (
            <ButtonGroup>
              <ButtonPositive type="submit">Create question</ButtonPositive>
              <ButtonNegative onClick={handleReset}>Reset</ButtonNegative>
            </ButtonGroup>
          )}
          {isEditMode && (
            <ButtonGroup>
              <ButtonPositive type="submit">Update question</ButtonPositive>
              <ButtonNegative onClick={onReset}>Cancel</ButtonNegative>
            </ButtonGroup>
          )}
        </form>
      )}
    </Form>
  );
}

AwesomeForm.propTypes = {
  validation: PropTypes.func,
  isEditMode: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

AwesomeForm.defaultProps = {
  validation: null,
};

const AwesomeSmartForm = () => {
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

export default AwesomeSmartForm;
