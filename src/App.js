import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './main/Main'
import Search from './search/Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		
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
