export const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';
export const RESET_FORM = 'RESET_FORM';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const setInitialValues = initialValues => ({
  type: SET_INITIAL_VALUES,
  payload: {
    initialValues,
  },
});

export const resetForm = () => ({
  type: RESET_FORM,
});
