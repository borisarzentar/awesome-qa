import colors from './colors';
import typography from './typography';

const buttons = {
  default: {
    textColor: colors.black,
    borderColor: colors.black,
    backgroundColor: colors.white,
    focusColor: colors.grey700,
  },
  positive: {
    textColor: colors.positive,
    borderColor: colors.positive,
    backgroundColor: colors.white,
    focusColor: colors.positive,
  },
  neutral: {
    textColor: colors.neutral,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
    focusColor: colors.neutral,
  },
  negative: {
    textColor: colors.negative,
    borderColor: colors.negative,
    backgroundColor: colors.white,
    focusColor: colors.negative,
  },
};

const inputs = {
  text: {
    textColor: colors.black,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
    focusColor: colors.blue400,
  },
};

const answer = {
  textColor: colors.white,
  backgroundColor: colors.neutral,
};

const answerToggle = {
  textColor: colors.black,
  backgroundColor: colors.white,
};

const switchToggle = {
  color: colors.black,
  borderColor: colors.black,
  backgroundColor: colors.white,
};

const tooltip = {
  textColor: colors.black,
  borderColor: colors.grey300,
  backgroundColor: colors.white,
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
    backgroundColor: colors.white,
    delimiterColor: colors.black,
    textColor: colors.black,
    borderColor: colors.neutral,
    answer,
    answerToggle,
    switch: switchToggle,
    tooltip,
    error,
  },
};
