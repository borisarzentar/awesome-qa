import {
  ADD_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  DELETE_ALL_QUESTIONS,
  SORT_QUESTIONS,
} from './actions';

let globalId = 0;

const initialState = [
  {
    id: (globalId += 1),
    question: 'How to add a question?',
    answer: 'Just use the form below!',
  },
];

const createQuestion = questionData => {
  globalId += 1;
  return {
    id: globalId,
    question: questionData.question,
    answer: questionData.answer,
  };
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      return [createQuestion(action.payload.question), ...state];
    }
    case EDIT_QUESTION: {
      const { questionId } = action.payload;
      const newQuestionData = action.payload.newData;
      const questionIndex = state.findIndex(
        stateQuestion => stateQuestion.id === questionId
      );
      return [
        ...state.slice(0, questionIndex),
        {
          id: questionId,
          ...newQuestionData,
        },
        ...state.slice(questionIndex + 1),
      ];
    }
    case DELETE_QUESTION: {
      const { questionId } = action.payload;
      const questionIndex = state.findIndex(
        stateQuestion => stateQuestion.id === questionId
      );
      return [
        ...state.slice(0, questionIndex),
        ...state.slice(questionIndex + 1),
      ];
    }
    case DELETE_ALL_QUESTIONS: {
      return [];
    }
    case SORT_QUESTIONS: {
      const questions = [...state];
      return questions.sort(questionSorter);
    }
    default:
      return state;
  }
}

function questionSorter(questionData1, questionData2) {
  const question1 = questionData1.question;
  const question2 = questionData2.question;
  const compResult = question1
    .toLowerCase()
    .localeCompare(question2.toLowerCase());
  if (compResult !== 0) {
    // spotted a difference when considering the locale
    return compResult;
  }
  // no difference found when considering locale, let's see whether
  // capitalization matters
  if (question1 > question2) {
    return 1;
  }
  if (question1 < question2) {
    return -1;
  }
  // the characters are equal.
  return 0;
}
