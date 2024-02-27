import React, { Component } from 'react';
import './Exercise.css'; 
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://www.example.com">This is a Link</a>
        <form>
          <label>
            This is a Form:
            <input type="text" name="name" placeholder="Enter your name"/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <img src="c:\Users\ilayn\Downloads\react-1-logo-png-transparent.png" width="150" height="100" alt="React Logo" /> 
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
