import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skill) => (
          <div key={skill.name}>
            {skill.name} - {skill.level}
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
