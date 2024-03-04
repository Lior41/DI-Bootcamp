import React from "react";
import { ThemeProvider } from "./ThemeContext"; 
import ThemeSwitcher from "./ThemeSwitcher"; 

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Exemple de commutateur de thème</h1>
        <ThemeSwitcher />
       
      </div>
    </ThemeProvider>
  );
}

export default App;
