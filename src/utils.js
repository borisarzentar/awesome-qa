/* eslint-disable import/prefer-default-export */

export const get = path => ({ theme }) => getThemeValue(theme, path.split('.'));

function getThemeValue(theme, path) {
  if (path.length === 1) {
    return theme[path[0]];
  }
  return getThemeValue(theme[path[0]], path.slice(1));
}
