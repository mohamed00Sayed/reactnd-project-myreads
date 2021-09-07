import React, { Component } from 'react'
import Book from '../main/Book'

class SearchResults extends Component{
	
	render(){
		return(
			<div className="search-books-results">
				<ol className="books-grid">
					<li><Book /></li>
					<li><Book /></li>
				</ol>
			</div>
		)
	}
}

export default SearchResults