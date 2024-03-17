import React from 'react';

function SearchBox({ onSearchChange, onSearchSubmit }) {
  return (
    <div>
      <input type="text" onChange={onSearchChange} placeholder="Search for books" />
      <button onClick={onSearchSubmit}>Search</button>
    </div>
  );
}

export default SearchBox;
