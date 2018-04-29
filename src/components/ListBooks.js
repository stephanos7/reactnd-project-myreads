import React from "react";
import { Link, Route } from "react-router-dom";

import Currently from "./Currently";
import WantTo from "./WantTo";
import Read from "./Read";
import Search from "./Search";

const ListBooks = (props) => {
  return(
      <div>
        <Search />
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
          {/*<div className="open-search">
            <Link to="/search" component={Search}>Add a book</Link>
          </div>*/}
      </div>
  )
}

export default ListBooks;
