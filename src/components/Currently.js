import React from "react";

import Book from "./Book";

const Currently = (props) => {
  const { currentlyReading } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">

        <ol>
        {currentlyReading.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
        </ol>

        <ol className="books-grid">
          <li>
            <Book />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Currently;