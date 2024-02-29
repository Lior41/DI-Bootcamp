import React, { useState, useEffect } from 'react';
import './App.css';

// Component for individual cards
const Card = ({ superhero, onCardClick }) => {
  return (
    <div className="card" onClick={() => onCardClick(superhero)}>
      <img src={superhero.image} alt={superhero.name} />
      <div className="card-info">
        <h3>{superhero.name}</h3>
        <p>{superhero.occupation}</p>
      </div>
    </div>
  );
};

const App = () => {
  // Initial state setup with JSON data
  const [superheroes, setSuperheroes] = useState(initialSuperheroes);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  // Handler for card click
  const onCardClick = (clickedHero) => {
    if (clickedHero.clicked) {
      // Reset score if the card has already been clicked
      setCurrentScore(0);
      setSuperheroes(superheroes.map(hero => ({ ...hero, clicked: false })));
    } else {
      // Increment score and mark the card as clicked
      setCurrentScore(prevScore => prevScore + 1);
      setSuperheroes(superheroes.map(hero =>
        hero.id === clickedHero.id ? { ...hero, clicked: true } : hero
      ));
    }
    // Shuffle cards after each click
    shuffleSuperheroes();
  };

  // Function to shuffle superheroes
  const shuffleSuperheroes = () => {
    setSuperheroes(shuffledHeroes => [...shuffledHeroes].sort(() => Math.random() - 0.5));
  };

  // Update top score if current score is higher
  useEffect(() => {
    if (currentScore > topScore) {
      setTopScore(currentScore);
    }
    // Reset the game (shuffle cards) when the score is reset to zero
    if (currentScore === 0) {
      shuffleSuperheroes();
    }
  }, [currentScore, topScore]);

  return (
    <div className="App">
      <header className="scoreboard">
        <h1>Superheroes Memory Game</h1>
        <div className="scores">
          <div>Current Score: {currentScore}</div>
          <div>Top Score: {topScore}</div>
        </div>
      </header>
      <div className="cards-container">
        {superheroes.map(superhero => (
          <Card key={superhero.id} superhero={superhero} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

// JSON data for superheroes
const initialSuperheroes = [
  {
    "id": 1,
    "clicked": false,
    "name": "Captain America",
    "image": "https://media.oregonlive.com/madaboutmovies/photo/9816899-large.jpg",
    "occupation": "Soldier"
  },
  {
    "id": 2,
    "clicked": false,
    "name": "Iron Man",
    "image": "https://i.pinimg.com/originals/88/39/2b/88392b3dc35aad62440a3866ee02a8e8.jpg",
    "occupation": "CEO Stark Ind."
  },
  {
    "id": 3,
    "clicked": false,
    "name": "Hulk",
    "image": "https://www.zastavki.com/pictures/640x960/2015/Fantasy_Hulk_angry__Avengers_104763_30.jpg",
    "occupation": "Biochemist"
  },
  {
    "id": 4,
    "clicked": false,
    "name": "Thor",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51Tp1peS5FL._AC_.jpg",
    "occupation": "Warrior"
  },
  {
    "id": 5,
    "clicked": false,
    "name": "Batman",
    "image": "https://vignette.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest/top-crop/width/360/height/450?cb=20140208170841",
    "occupation": "Expert Detective"
  },
  {
    "id": 6,
    "clicked": false,
    "name": "Superman",
    "image": "https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2017/09/superman__henry_cavill__batman_v_superman.jpg",
    "occupation": "Journalist"
  },
  {
    "id": 7,
    "clicked": false,
    "name": "Wonder Woman",
    "image": "https://i.pinimg.com/originals/f3/3c/f0/f33cf0bf1bb0fd71c4bba1d4a88afe70.jpg",
    "occupation": "Secretary"
  },
  {
    "id": 8,
    "clicked": false,
    "name": "Flash",
    "image": "https://i.pinimg.com/originals/d7/0d/84/d70d843d8ab87911754c6b7603a4edf2.jpg",
    "occupation": "Forensic Sci."
  },
  {
    "id": 9,
    "clicked": false,
    "name": "Wolverine",
    "image": "https://c4.wallpaperflare.com/wallpaper/899/678/503/movies-comics-xmen-wolverine-superheroes-logan-claws-3333x4929-entertainment-movies-hd-art-wallpaper-preview.jpg",
    "occupation": "Adventurer"
  },
  {
    "id": 10,
    "clicked": false,
    "name": "Spider-Man",
    "image": "https://i.pinimg.com/originals/d5/6b/c4/d56bc445842242b29284d60b4b9a2684.jpg",
    "occupation": "Photographer"
  },
  {
    "id": 11,
    "clicked": false,
    "name": "Deadpool",
    "image": "https://vignette.wikia.nocookie.net/marvelmovies/images/6/66/Deadpool_promo.png/revision/latest?cb=20150707202600",
    "occupation": "Mercenary"
  },
  {
    "id": 12,
    "clicked": false,
    "name": "Mr Incredible",
    "image": "https://www.writeups.org/wp-content/uploads/Mister-Incredible-The-Incredibles-Bob-Parr-i.jpg",
    "occupation": "Insurance Rep."
  }

];

export default App;
