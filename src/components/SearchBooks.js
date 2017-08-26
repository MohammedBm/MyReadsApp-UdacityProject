import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import BookList from './BookList';

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    };
  }
  // NOTE: this helper will reutrn the matching result of the search, also we can add the books from the result to our library(shelf) via the drop-menu
  upateQuery = (query) =>{
    const {libraryBooks} = this.props;
    this.setState({query: query});
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') {
      return;
    }
    BooksAPI.search(trimmedQuery, 10).then((response) => {
      if (response && response.length) {
        const books = response.map((book) => {
          const libBook = libraryBooks.find((libBook) => libBook.id === book.id);
          const shelf = libBook
            ? libBook.shelf
            : 'none';

          return {
            id: book.id,
            shelf: shelf,
            authors: book.authors,
            title: book.title,
            imageLinks: {
              thumbnail: book.imageLinks.thumbnail
            }
          };
        });
        this.setState({books});
      }
    });
  }


  render() {
    const {books} = this.state
    const {updateShelfBooks} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.upateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookList
                id={book.id}
                 shelf={book.shelf}
                 authors={book.authors}
                 title={book.title}
                 imageLinks={book.imageLinks} updateShelfBooks={updateShelfBooks}/>
              </li>
            ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
