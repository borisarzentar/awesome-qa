import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './actions';
import Label from '../UILibrary/Label';
import Switch from '../UILibrary/Switch';

const Toggle = styled.div`
  display: flex;
  justify-content: flex-end;

  ${Label} {
    margin: 0 5px 0 5px;
  }
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const isLight = theme === 'light';
  const handleChange = () => {
    dispatch(setTheme(isLight ? 'dark' : 'light'));
  };

  return (
    <Toggle>
      <Label>Light</Label>
      <Switch value={isLight} onChange={handleChange} />
      <Label>Dark</Label>
    </Toggle>
  );
};

export default ThemeToggle;
