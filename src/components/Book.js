import React from "react";
import propTypes from "prop-types";

const Book = (props) => {
  const { title, author, imageURL } = props;
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
          <div className="book-shelf-changer">
            <select>
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

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  imageURL: propTypes.string.isRequired
}

export default Book;