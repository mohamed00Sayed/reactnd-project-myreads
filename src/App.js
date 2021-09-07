import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './main/Main'
import Search from './search/Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
		<div>
			<Route exact path='/' render={({ history })=> (
				<Main 
					onAdd={()=> {history.push('/search')}}
				/>
			)} />
			<Route path='/search' render={()=> (<Search />)} />
		</div>
    )
  }
}

export default BooksApp
