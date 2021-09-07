import React, { Component } from 'react'
import BookList from './BookList'

class Shelf extends Component{	
	
	render(){
		const { shelfData } = this.props
		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfData.title}</h2>
				<BookList booklist={shelfData.booklist}/>
			</div>
		)
	}
}

export default Shelf