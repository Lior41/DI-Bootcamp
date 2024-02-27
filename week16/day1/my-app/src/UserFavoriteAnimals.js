import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props; // Destructure favAnimals from props
    return (
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li> // Use index as key for each list item
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
