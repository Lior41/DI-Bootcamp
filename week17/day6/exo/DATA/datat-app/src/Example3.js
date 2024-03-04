import React, { Component } from 'react';
import data from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience) => (
          <div key={experience.id}>
            {experience.role} at {experience.company} for {experience.years} years
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
