// ToggleButton.js
import React from 'react';
import { useTheme } from '../ThemeContext';
import './ToggleButton.css';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

export default ToggleButton;
