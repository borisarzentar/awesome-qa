import { SET_THEME } from './actions';

export default function themeReducer(state = 'light', action) {
  switch (action.type) {
    case SET_THEME: {
      return action.payload.theme;
    }
    default:
      return state;
  }
}
