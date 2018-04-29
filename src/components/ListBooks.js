import React from "react";
import { Link } from "react-router-dom";

import Currently from "./Currently";
import WantTo from "./WantTo";
import Read from "./Read";

const ListBooks = (props) => {
  return(
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Currently currentlyReading={props.books}
                        updateReadingStatus={props.updateReadingStatus} />
            <WantTo wantToRead={props.books}
                    updateReadingStatus={props.updateReadingStatus} />
            <Read alreadyRead={props.books}
                  updateReadingStatus={props.updateReadingStatus} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
  )
}

export default ListBooks;
