import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component{
	
	render(){
		return(
			<div>
				<h6>Book Component</h6>
				<ShelfChanger />
			</div>
		)
	}
}

export default Book