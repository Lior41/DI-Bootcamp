import React from 'react';
import Car from './Components/Car';
import Events from './Components/Event'; 
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <h1>Welcome to My Showcase</h1>
      <Car carInfo={carInfo} />
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
