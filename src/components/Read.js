import React from "react";
import propTypes from "prop-types";

import Book from "./Book";

const Read = (props) => {
  const { alreadyRead } = props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {alreadyRead.filter(book => book.shelf === "read").map(book => (
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

Read.propTypes = {
  alreadyRead : propTypes.array.isRequired
}

export default Read;