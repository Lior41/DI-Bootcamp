import React from 'react';
import { useTheme } from './ThemeContext'; 

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Basculer le thème</button>
      <p>Thème actuel : {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;
