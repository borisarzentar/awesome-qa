export const ADD_QUESTION = 'ADD_QUESTION';
export const EDIT_QUESTION = 'EDIT_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const SORT_QUESTIONS = 'SORT_QUESTIONS';
export const DELETE_ALL_QUESTIONS = 'DELETE_ALL_QUESTIONS';

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: {
    question,
  },
});

export const editQuestion = (questionId, newData) => ({
  type: EDIT_QUESTION,
  payload: {
    questionId,
    newData,
  },
});

export const deleteQuestion = questionId => ({
  type: DELETE_QUESTION,
  payload: {
    questionId,
  },
});

export const deleteAllQuestions = () => ({
  type: DELETE_ALL_QUESTIONS,
});

export const sortQuestions = () => ({
  type: SORT_QUESTIONS,
});
