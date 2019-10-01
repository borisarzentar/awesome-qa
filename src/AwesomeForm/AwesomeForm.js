import React from 'react';
import PropTypes from 'prop-types';
import Form from '../UILibrary/Form';
import Label from '../UILibrary/Label';
import Input from '../UILibrary/Input';
import TextArea from '../UILibrary/TextArea';
import FormGroup from '../UILibrary/FormGroup';
import ButtonGroup from '../UILibrary/ButtonGroup';
import ErrorText from '../UILibrary/ErrorText';
import { ButtonPositive, ButtonNegative } from '../UILibrary/Button';

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

export default AwesomeForm;
