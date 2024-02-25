import React, { useState, useEffect } from 'react';
import quotes from './QuotesDatabase'; // Adjust this import path to where your QuotesDatabase.js is located in your project

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [colors, setColors] = useState({
    backgroundColor: '',
    quoteColor: '',
    buttonColor: ''
  });

  // Function to generate a random color
  const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  // Function to select a new random quote and colors
  const getNewQuote = () => {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    // Ensuring the new quote is different from the current one
    while (currentQuote && quotes[randomQuoteIndex].quote === currentQuote.quote) {
      randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    }
    setCurrentQuote(quotes[randomQuoteIndex]);
    setColors({
      backgroundColor: getRandomColor(),
      quoteColor: getRandomColor(),
      buttonColor: getRandomColor()
    });
  };

  // Effect hook to set the initial quote and colors
  useEffect(() => {
    getNewQuote();
  }, []);

  // If currentQuote is null, return null or a loader since we expect the quote to be an object
  if (!currentQuote) return "Loading...";

  return (
    <div style={{ backgroundColor: colors.backgroundColor, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ color: colors.quoteColor }}>
        <h1>"{currentQuote.quote}"</h1>
        <p>- {currentQuote.author}</p>
      </div>
      <button
        style={{ backgroundColor: colors.buttonColor, color: colors.quoteColor, padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
        onClick={getNewQuote}
      >
        New Quote
      </button>
    </div>
  );
}

export default App;
