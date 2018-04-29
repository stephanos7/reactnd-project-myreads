import React from 'react'
import { Link, Route } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI';

import Currently from "./Currently";
import WantTo from "./WantTo";
import Read from "./Read";
import Search from "./Search";

import '../styles/App.css';

class App extends React.Component {
  state = {
    books: [],
  }

  updateAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({books}));
    });
  }

  updateReadingStatus = (event, id) => {
    BooksAPI.update(id, event.target.value)
    .then(this.updateAllBooks());
  }

  componentDidMount(){
    this.updateAllBooks();
  }

  render() {
    return (
      <div className="app">          
          <div className="list-books">
          <Search />
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Currently currentlyReading={this.state.books}
                           updateReadingStatus={this.updateReadingStatus} />
                <WantTo wantToRead={this.state.books}
                        updateReadingStatus={this.updateReadingStatus} />
                <Read alreadyRead={this.state.books}
                      updateReadingStatus={this.updateReadingStatus} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" component={Search}>Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default App
