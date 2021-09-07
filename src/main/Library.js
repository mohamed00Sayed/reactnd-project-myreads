import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component{
	
	render(){
		return(
			<div className="list-books-content">
				<Shelf />
				<Shelf />
				<Shelf />
			</div>
		)
	}
}

export default Library