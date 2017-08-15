import React, {Component} from 'react'
import Library from './Library'
import {Link} from 'react-router-dom'

// NOTE: creating the BookList Component
class BookList extends Component {
  constructor(props) {
    super(props);
    // NOTE: passing the props and setting state
    this.state = {
      shelf: 'none'
    };
  }

  //NOTE: this method will change the book from a shelf to another.
  changeBookShelf = (value)=> {
    const {updateBookShelf} = this.props;
    updateBookShelf(this.props, value);

    this.setState({shelf: value});
  };

  // NOTE: this will update the state after the comonpenet are mounted
  componentDidMount() {
    const {shelf} = this.props;
    this.setState({shelf});
  };

  render() {
    const {title, authors, imageLinks} = this.props;
    const {thumbnail} = imageLinks;
    const {shelf} = this.state;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumbnail}")`
          }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => this.changeBookShelf(event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default BookList;