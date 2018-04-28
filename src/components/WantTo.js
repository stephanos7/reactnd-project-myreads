import React from "react";

import Book from "./Book";

const WantTo = (props) => {
  const { wantToRead } = props 
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {wantToRead.map(book => (
            <Book key={book.id}
                  title={book.title}
                  author={book.authors[0]}
                  imageURL={book.imageLinks.thumbnail}/>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default WantTo;