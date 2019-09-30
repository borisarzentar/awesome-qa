import { createStore, combineReducers } from 'redux';
import { questionsReducer } from '../Questions';
import { themeReducer } from '../Theme';
import { awesomeFormReducer } from '../AwesomeForm';

export default createStore(
  combineReducers({
    questions: questionsReducer,
    theme: themeReducer,
    form: awesomeFormReducer,
  })
);
