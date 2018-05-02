import React from "react";

import Book from "./Book";

const Bookshelf = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.filter( book => book.shelf === props.bookValue).map(book => (
            <Book key={book.id} 
                  book={book}
                  updateReadingStatus={props.updateReadingStatus}/>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf;
