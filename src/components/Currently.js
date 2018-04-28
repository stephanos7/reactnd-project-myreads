import React from "react";

import Book from "./Book";

const Currently = (props) => {
  const { currentlyReading } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentlyReading.map(book => (
            <Book key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Currently;