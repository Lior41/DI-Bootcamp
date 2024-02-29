import React, { useState } from 'react';

function Phone() {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  }; 

  return (
    <div>
      <h2>Phone Details:</h2>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p> 
      <p>Year: {year}</p>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
}

export default Phone;
