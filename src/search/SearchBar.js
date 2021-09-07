import React, { Component } from 'react'

class SearchBar extends Component{
	
	render(){
		return(
			<div className="search-books-bar">
				<button className="close-search" onClick={() => {}}>Close</button>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author"/>
				</div>
			</div>
		)
	}
}

export default SearchBar