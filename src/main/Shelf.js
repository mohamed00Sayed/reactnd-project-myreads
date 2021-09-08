import React, { Component } from 'react'
import BookList from './BookList'

class Shelf extends Component{	
	
	render(){
		const { shelfTitle, booklist, changeShelf, onNone } = this.props
		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfTitle}</h2>
				<BookList 
					books={booklist} 
					changeShelf={changeShelf}
					onNone={onNone}
				/>
			</div>
		)
	}
}

export default Shelf