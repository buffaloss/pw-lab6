// ThemeContext.js
// import React, { createContext, useState, useContext } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   const [backgroundColor, setBackgroundColor] = useState('#4793AF'); // Default light background color


//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     setBackgroundColor((prevColor) => (prevColor === '#4793AF' ? '#222222' : '#4793AF')); // Change background color accordingly
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem("app_theme") || "light"; // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useLayoutEffect(() => {
    localStorage.setItem("app_theme", theme); // Save theme to localStorage

    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
