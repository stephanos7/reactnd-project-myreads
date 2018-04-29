import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI';
import Book from "./Book";

class Search extends React.Component{
  static propTypes = {
    books: propTypes.array.isRequired,
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

  updateStateWithSearchedBooks = (searchedBooks) => {
    this.setState(() => (
      {searchedBooks}
    ))
  }

  render(){
    const { books, updateReadingStatus } = this.props;
    const { searchedBooks } = this.state;
    const filterTerm = this.state.query.trim().toLowerCase();
    console.log(searchedBooks)
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
            {Array.isArray(searchedBooks) && searchedBooks !== "" ? searchedBooks.map( book => (
              <Book key={book.id}
                    book={book}
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