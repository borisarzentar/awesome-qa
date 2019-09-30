import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '../Theme';

const Providers = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
