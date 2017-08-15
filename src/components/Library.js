import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

//NOTE: Declaring the Library Comonent
class Library extends Component{

  render(){
    return(
      <div className="list-books">
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <BookShelf name="Currently Reading"/>
            <BookShelf name="Want to Read"/>
            <BookShelf name="Read"/>
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
