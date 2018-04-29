import React from 'react'

import * as BooksAPI from '../utils/BooksAPI';
import ListBooks from "./ListBooks";

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
    return (
      <div className="app">          
        <ListBooks books={this.state.books}
                   updateAllBooks={this.updateAllBooks}
                   updateReadingStatus={this.updateReadingStatus}
        />
      </div>
    )
  }
}

export default App
