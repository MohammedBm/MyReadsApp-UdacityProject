import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './myread-app.css'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  constructor(props) {
    // NOTE: setting up the state from the bookAPI
    super(props);
    this.state = {
      books: []
    };
  }


  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books:books})
    })
  }

  updateShelfBooks = (book, updateShelf) =>{
    const { books } = this.state;

    const bookIndex = books.findIndex((key) => {
      return key.id === book.id;
    });

    let stateBooks = Object.assign([], books);

    if (bookIndex === -1) {
      const newBook = Object.assign({}, book);
      newBook.shelf = updateShelf;
      stateBooks.push(newBook);
    } else {
      stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
      stateBooks[bookIndex].shelf = updateShelf;
    }

    BooksAPI.update(book, updateShelf).then(
      this.setState({ books: stateBooks })
    );
  };


  // NOTE: This will be send to the index.js and will be render on the index.html
// FIXME: need fix books is undifend
  render() {
    const { books } = this.state;
    if (!books) {
      return null;
    }

    return (
      <Router>
      <div className="app">
          {/*NOTE: render the SearchBooks component */}
          <Route path="/search" render={ () => (
            <SearchBooks
              libraryBooks={books}
              updateShelfBooks={this.updateShelfBooks}
            />
          ) } />

          {/*NOTE: render the Library component */}
          <Route exact path="/" render={ () => (
            <Library
              books={books}
              updateShelfBooks={this.updateShelfBooks}
            />
          ) } />

      </div>
    </Router>
    )
  }
}

export default BooksApp;
