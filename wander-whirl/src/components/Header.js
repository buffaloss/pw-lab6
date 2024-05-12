import React, { useState } from "react";
import "./Header.css";
import LocationForm from "./LocationForm";
import LocationList from "./LocationList";
import { useTheme } from "../ThemeContext";

function Header({onShowForm}) {
  const { theme } = useTheme();

  return (
    <div className={`intro-container ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`intro-content ${theme === 'dark' ? 'dark' : ''}`}>
        <h2>Track your travel destinations with ease and style!</h2>
        <div className={`buttons-container ${theme === 'dark' ? 'dark' : ''}`}>
            <button className={`btn ${theme === 'dark' ? 'dark' : ''}`} onClick={onShowForm}>Add Location</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
