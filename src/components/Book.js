import React from "react";
import propTypes from "prop-types";

class Book extends React.Component {

  static propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  imageURL: propTypes.string.isRequired
}
  handleChange = (event) => {
    this.props.updateReadingStatus(event);
  }

  render(){
    const {title, author, imageURL, shelf} = this.props;
  
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
            <div className="book-shelf-changer">
              <select defaultValue={shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}

export default Book;