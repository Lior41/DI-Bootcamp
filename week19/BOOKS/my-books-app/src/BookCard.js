import React from 'react';
import './BookCard.css'; 

function BookCard({ book }) {
  return (
    <div className="BookCard">
      {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
        <img className="BookCard-Image" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      )}
      <div className="BookCard-Info">
        <h2 className="BookCard-Title">{book.volumeInfo.title}</h2>
        {book.volumeInfo.authors && <p className="BookCard-Authors">{book.volumeInfo.authors.join(", ")}</p>}
        {book.volumeInfo.publishedDate && <p className="BookCard-PublishedDate">{new Date(book.volumeInfo.publishedDate).getFullYear()}</p>}
      </div>
    </div>
  );
}

export default BookCard;
