import React, { Component } from 'react'
import BookList from './BookList'

class Shelf extends Component{
	
	render(){
		return(
			<div>
				<h5>Shelf Component</h5>
				<BookList />
			</div>
		)
	}
}

export default Shelf