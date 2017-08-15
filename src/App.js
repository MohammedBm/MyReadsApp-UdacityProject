import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
class BooksApp extends React.Component {
  constructor(props) {
    // NOTE: setting up the state from the bookAPI
    super(props);
    this.state = BooksAPI.getAll().then((books) => {
      this.setState({books:books})
    })
  }
  // NOTE: This will be send to the index.js and will be render on the index.html
  render() {
    return (
      <div className="app">
        <Router>
          {/*NOTE: render the SearchBooks component */}
          <Route path="/search" render={ () => (

            <SearchBooks/>
          ) } />

          {/*NOTE: render the Library component */}
          <Route exact path="/" render={ () => (
            <Library/>
          ) } />

        </Router>
      </div>
    )
  }
}

export default BooksApp
