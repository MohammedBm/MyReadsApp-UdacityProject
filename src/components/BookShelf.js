import React from 'react';
import BookList from './BookList'

//NOTE: used a dumb component since we dont need to minplate alot in the component
function BookShelf(props){
  const {name, books, updateShelfBooks} = props
  return(
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {
            books.sort((a,b) => {
              return a.title > b.title;
            }).map( (book) => (
              <li key={book.id}>
                <BookList
                  id={book.id}
                  authors={book.authors}
                  title={book.titke}
                  imageLinks={book.imageLinks}
                  self={book.shelf}
                  updateShelfBooks={updateShelfBooks}
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
