import { useEffect, useState, useCallback, useMemo } from 'react';

const Form = ({ children, initialValues, onSubmit, validation }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  const handleChange = useCallback(
    (eventOrString, name) => {
      let fieldValue = eventOrString;
      let fieldName = name;
      if (typeof eventOrString !== 'string') {
        fieldValue = eventOrString.target.value;
        fieldName = eventOrString.target.name;
      }

      // We could convert fieldValue to correct type based on target type,
      // but for this purpose we need only string.

      setValues(formValues => ({
        ...formValues,
        [fieldName]: fieldValue,
      }));
    },
    [setValues]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (typeof validation === 'function') {
        try {
          validation(values);
        } catch (error) {
          if (error.name === 'ValidationError') {
            setErrors(error.messages);
            return;
          }
          throw error;
        }
      }
      setErrors({});
      const maybePromise = onSubmit(values);
      if (maybePromise && maybePromise.then) {
        maybePromise.then(data => {
          setValues(initialValues);
          return data;
        });
      } else {
        setValues(initialValues);
      }
    },
    [validation, onSubmit, values, setValues, initialValues]
  );

  if (typeof children !== 'function') {
    throw new Error('Form requires to have children as a function!');
  }

  const handleReset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  const formChildrenProps = useMemo(
    () => ({
      errors,
      values,
      handleReset,
      handleChange,
      handleSubmit,
    }),
    [values, errors, handleChange, handleSubmit, handleReset]
  );

  return children(formChildrenProps);
};

export default Form;
