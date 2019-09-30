import colors from './colors';
import typography from './typography';

const buttons = {
  default: {
    textColor: colors.black,
    borderColor: colors.black,
    backgroundColor: colors.white,
    focusColor: colors.white,
  },
  positive: {
    textColor: colors.grey100,
    borderColor: colors.positive,
    backgroundColor: colors.positive,
    focusColor: colors.white,
  },
  neutral: {
    textColor: colors.grey100,
    borderColor: colors.blue300,
    backgroundColor: colors.blue300,
    focusColor: colors.white,
  },
  negative: {
    textColor: colors.grey100,
    borderColor: colors.negative,
    backgroundColor: colors.negative,
    focusColor: colors.white,
  },
};

const inputs = {
  text: {
    textColor: colors.grey300,
    borderColor: colors.grey300,
    backgroundColor: colors.blue700,
    focusColor: colors.blue500,
  },
};

const answer = {
  textColor: colors.blue700,
  backgroundColor: colors.blue300,
};

const answerToggle = {
  textColor: colors.grey300,
  backgroundColor: colors.blue700,
};

const switchToggle = {
  color: colors.blue700,
  borderColor: colors.grey300,
  backgroundColor: colors.grey100,
};

const tooltip = {
  textColor: colors.grey300,
  borderColor: colors.grey300,
  backgroundColor: colors.blue700,
};

const error = {
  textColor: colors.negative,
};

export default {
  colors,
  typography,
  ui: {
    buttons,
    inputs,
    borderRadius: '4px',
    backgroundColor: colors.grey700,
    delimiterColor: colors.grey300,
    textColor: colors.grey300,
    borderColor: colors.grey300,
    answer,
    answerToggle,
    switch: switchToggle,
    tooltip,
    error,
  },
};
