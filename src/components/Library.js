import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

//NOTE: Declaring the Library Comonent
class Library extends Component{

  // NOTE: this will be used to filter the result according to the status
  _filterBook = (shelf) => {
    const {books} = this.props;
    return books.filter((book) => book.shelf === shelf);
  }


  render(){
    const {updateShelfBooks} = this.props
    return(
      <div className="list-books">
        <div className='list-books-title'>
          <h1>MBamhrez Reads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <BookShelf
              name="Currently Reading"
              books={this._filterBook('currentlyReading')}
              updateShelfBooks={updateShelfBooks}
            />

            <BookShelf
              name="Want to Read"
              books={this._filterBook('wantToRead')}
              updateShelfBooks={updateShelfBooks}
            />
            <BookShelf
              name="Read"
              books={this._filterBook('read')}
              updateShelfBooks={updateShelfBooks}
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
