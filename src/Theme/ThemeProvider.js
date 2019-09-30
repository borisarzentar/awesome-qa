import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeProvider = ({ children }) => {
  const themeName = useSelector(state => state.theme);
  const theme = themes[themeName];

  return (
    <StyledThemeProvider theme={theme}>
      {Children.only(children)}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
