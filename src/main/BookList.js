import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{
	
	render(){
		return(
			<div>
				<h6>BookList Component</h6>
				<Book />
				<Book />
			</div>
		)
	}
}

export default BookList