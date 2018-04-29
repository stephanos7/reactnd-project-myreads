import React from "react";
import { Link } from "react-router-dom";

import Book from "./Book";

class Search extends React.Component{
  state = {
    query : ""
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render(){
    const {books, updateReadingStatus} = this.props;
    return (
      <div className="list-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                <input type="text" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {books.filter( book => (
              book.title.includes(this.state.query.trim()) ||  book.authors[0].includes(this.state.query.trim())
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