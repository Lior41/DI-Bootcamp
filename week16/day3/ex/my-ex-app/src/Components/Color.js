import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect hook to alert when the component has mounted
  useEffect(() => {
    alert("useEffect reached");
  }, []); // The empty dependency array [] means this effect runs only once after the initial render

  // Function to update the favoriteColor state to "blue"
  const changeColorToBlue = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColorToBlue}>Change Color to Blue</button>
    </div>
  );
}

export default Color;
