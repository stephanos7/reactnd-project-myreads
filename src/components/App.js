import React from 'react';  
import { Route, Link } from "react-router-dom";

import * as BooksAPI from '../utils/BooksAPI';
import Bookshelf from "./Bookshelf";
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
    .then(() => this.updateAllBooks());
  }

  componentDidMount(){
    this.updateAllBooks();
  }

  render() {
    const shelves = {
      currentlyReading : ["Currenly Reading", "currentlyReading"],
      wantToRead : ["Want To Read", "wantToRead"],
      read : ["Read", "read"]
    }
    return (
      <div className="app">
        <Route path="/search" render={ () => ( 
          <Search updateReadingStatus={this.updateReadingStatus} />
        )}/>
        <Route exact path="/" render={ () => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {Object.keys(shelves).map( shelf => ( 
                <Bookshelf key={shelf}
                           title={shelves[shelf][0]}
                           bookValue={shelves[shelf][1]}
                           books={this.state.books}
                           updateReadingStatus={this.updateReadingStatus}
                           updateAllBooks={this.updateAllBooks}/> ))}
                
              </div>
            </div> 
          </div>)} />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default App
