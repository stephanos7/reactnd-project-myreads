import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI';
import Book from "./Book";

class Search extends React.Component{
  static propTypes = {
    updateReadingStatus: propTypes.func.isRequired
  }

  state = {
    searchedBooks: [],
    query : ""
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }), this.searchBooks(query))
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then((searchedBooks) => this.updateStateWithSearchedBooks(searchedBooks))
  }

  updateStateWithSearchedBooks = (searchedBooks=[]) => {
    this.setState(() => (
      {searchedBooks}
    ))
  }

  compareBooks = (myBooks=[], searchedBook) => myBooks.indexOf(searchedBook);

  render(){
    const { updateReadingStatus } = this.props;
    const { searchedBooks, query } = this.state;
    const { myBooks }  = this.props;

    const foundInMyBooks= () => this.compareBooks(myBooks, searchedBooks)

    return (
      <div className="list-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={query} onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {Array.isArray(searchedBooks) ? searchedBooks.map( book => (
              <Book key={book.id}
                    book={book}
                    foundInMyBooks={foundInMyBooks()}
                    updateReadingStatus={updateReadingStatus} />
            )) : <h3>No results found</h3>}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;