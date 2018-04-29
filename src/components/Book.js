import React from "react";
import propTypes from "prop-types";

class Book extends React.Component {

  static propTypes = {
  book: propTypes.object.isRequired,
  updateReadingStatus: propTypes.func.isRequired
}
  handleChange = (event, id) => {
    this.props.updateReadingStatus(event, id);
  }

  render(){
    const {shelf, title, authors} = this.props.book;
    const imageLinks = this.props.book.imageLinks;
    
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {imageLinks !== undefined ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div> : <div className="book-cover" style={{ width: 128, height: 193}}>image unavailable</div>}
            <div className="book-shelf-changer">
              <select defaultValue={shelf} onChange={(event) => this.handleChange(event, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors ? <div className="book-authors">{authors[0]}</div> : <div></div>}
        </div>
      </li>
    )
  }
}

export default Book;