import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src='/H-G.jpg' alt='Hong-Kong' />
        </div>
        <div>
          <img src='/Macao.webp' alt='Macao' />
        </div>
        <div>
          <img src='/japan.webp' alt='japan' />
        </div>
        <div>
          <img src='/Las.webp' alt='Las-Vegas' />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
