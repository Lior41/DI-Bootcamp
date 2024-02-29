import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteForLanguage = (name) => {
    setLanguages(languages.map(lang =>
      lang.name === name ? { ...lang, votes: lang.votes + 1 } : lang
    ));
  };

  // Seulement un seul bloc return doit être présent dans le composant fonction
  return (
    <div className="app-container">
      <h1 className="app-title">Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div key={index} className="language-item">
          <span className="language-name">{lang.name}</span>
          <span className="vote-count">- Votes: {lang.votes}</span>
          <button
            onClick={() => voteForLanguage(lang.name)}
            className="vote-button"
          >
            Click Here
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
