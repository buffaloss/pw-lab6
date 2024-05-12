import React from 'react';
import { useTheme } from '../ThemeContext';
import './ToggleButton.css';


const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`btn-container ${theme === 'dark' ? 'dark' : ''}`}>
    <button onClick={toggleTheme} className={`theme-btn ${theme === 'dark' ? 'dark' : ''}`} >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
    </div>
  );
};

export default ToggleButton;
