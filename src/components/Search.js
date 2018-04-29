import React from "react";
import { Link } from "react-router-dom";

import Book from "./Book";

class Search extends React.Component{
  state = {
    query : ""
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  render(){
    const {books, updateReadingStatus} = this.props;
    const filterTerm = this.state.query.trim().toLowerCase();
    return (
      <div className="list-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {books.filter( book => (
              book.title.toLowerCase().includes(filterTerm) ||  book.authors[0].toLowerCase().includes(filterTerm)
            )).map( book => (
              <Book key={book.id}
                    book={book}
                    updateReadingStatus={updateReadingStatus} />
            ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;