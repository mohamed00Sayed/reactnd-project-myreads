import React, { Component } from 'react'
import BookList from './BookList'

class Shelf extends Component{
	
	render(){
		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<BookList />
			</div>
		)
	}
}

export default Shelf