import React, { useState } from 'react';
import SearchBox from './SearchBox';
import BookList from './BookList';

function Book() {
  const [searchField, setSearchField] = useState('');
  const [books, setBooks] = useState([]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSearchSubmit = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
      .then(response => response.json())
      .then(data => {
        const sortedBooks = data.items.sort((a, b) => 
          new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate)
        );
        setBooks(sortedBooks);
      });
  };

  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} onSearchSubmit={onSearchSubmit} />
      <BookList books={books} />
    </div>
  );
}

export default Book;
