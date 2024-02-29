import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color, setColor] = useState("red");

  
  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div>
      <h2>This car is a {color} {carInfo.model}.</h2>
      <button onClick={changeColor}>Change Color</button>
      <Garage size="small" />
    </div>
  );
}

export default Car;
