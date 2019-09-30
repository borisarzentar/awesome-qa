import { SET_INITIAL_VALUES, RESET_FORM } from './actions';

const initialState = {
  isEditMode: false,
  questionId: null,
  initialValues: {
    question: '',
    answer: '',
  },
};

export default function awesomeFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_VALUES: {
      const { id, question, answer } = action.payload.initialValues;
      return {
        ...state,
        isEditMode: true,
        questionId: id,
        initialValues: {
          question,
          answer,
        },
      };
    }
    case RESET_FORM: {
      return initialState;
    }
    default:
      return state;
  }
}
