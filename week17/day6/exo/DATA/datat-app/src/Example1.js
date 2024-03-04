import React, { Component } from 'react';
import data from './data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Media Profiles</h2>
        {data.SocialMedias.map((socialMedia) => (
          <div key={socialMedia.name}>
            <a href={socialMedia.URL}>{socialMedia.name}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
