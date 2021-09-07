import React, { Component } from 'react'
import Book from '../main/Book'

class SearchResults extends Component{
	
	render(){
		return(
			<div>
				<h4>Search Results Component</h4>
				<ol>
					<li><Book /></li>
					<li><Book /></li>
				</ol>
			</div>
		)
	}
}

export default SearchResults