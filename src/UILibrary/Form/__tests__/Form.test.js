/* eslint-disable */

import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Form from '../Form';
import { ValidationError } from '../../../AwesomeForm';

// eslint-disable-next-line react/prop-types
function TestForm({ values, handleChange, handleSubmit, handleReset, errors }) {
  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        onChange={handleChange}
        value={values.name}
        name="name"
        data-testid="input-name"
      />
      {!!errors.name && <div data-testid="error-name">{errors.name}</div>}
      <button type="submit" data-testid="submit-button">
        Submit
      </button>
      <button type="button" onClick={handleReset} data-testid="reset-button">
        Reset
      </button>
    </form>
  );
}

const initialValues = { name: 'Toni' };

function renderForm(props) {
  let injected;
  const { rerender, ...rest } = render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Form onSubmit={() => {}} initialValues={initialValues} {...props}>
      {formProps => (injected = formProps) && <TestForm {...formProps} />}
    </Form>
  );
  return {
    getProps() {
      return injected;
    },
    ...rest,
    rerender: rerenderProps =>
      rerender(
        <Form
          onSubmit={() => {}}
          initialValues={initialValues}
          {...props}
          {...rerenderProps}
        >
          {formProps => (injected = formProps) && <TestForm {...formProps} />}
        </Form>
      ),
  };
}

describe('Form', () => {
  it('should initialize Form correctly', () => {
    const { getProps } = renderForm();
    const props = getProps();

    expect(props.values).toEqual({
      name: 'Toni',
    });
  });

  it('should validate input', () => {
    const validation = values => {
      if (values.name !== 'Roki') {
        throw new ValidationError({
          name: 'Only Roki acceptable!',
        });
      }
    };

    const { getProps, getByTestId } = renderForm({
      validation,
    });

    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(getProps().errors).toEqual({
      name: 'Only Roki acceptable!',
    });
  });

  it('should call onSubmit after validation is done', () => {
    const onSubmit = jest.fn();
    const validation = jest.fn();

    const { getByTestId } = renderForm({
      onSubmit,
      validation,
    });

    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(validation).toBeCalled();
    expect(onSubmit).toBeCalled();
  });

  it('should reset values to initialValues after handleReset is called', () => {
    const { getProps, getByTestId } = renderForm({});

    const nameInput = getByTestId('input-name');
    fireEvent.change(nameInput, {
      target: { value: 'Tim' },
    });

    expect(getProps().values).toEqual({
      name: 'Tim',
    });

    const resetButton = getByTestId('reset-button');
    fireEvent.click(resetButton);

    expect(getProps().values).toEqual({
      name: 'Toni',
    });
  });
});
