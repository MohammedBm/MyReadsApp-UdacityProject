import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

//NOTE: Declaring the Library Comonent
class Library extends Component{

  // NOTE: this will be used to filter the result according to the status
  _filter = (shelf) =>{
    const {books} = this.props;
    return books.filter((book) => book.shelf === shelf)
  }


  render(){
    const {updateBookShelf} = this.props
    return(
      <div className="list-books">
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <BookShelf
              name="Currently Reading"
              books={this._filter('currentlyReading')}
            />

            <BookShelf
              name="Want to Read"
              books={this._filter('wantToRead')}
            />
            <BookShelf
              name="Read"
              books={this._filterBooks('read')}
            />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            Add a Book
          </Link>
        </div>
      </div>
    )
  }
}

export default Library;
