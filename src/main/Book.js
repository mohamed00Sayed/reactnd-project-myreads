import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component{
	
	render(){
		const { title, author, imgURL, id, changeShelf, selectedOpt } = this.props
		const imgURLQuery = 'url(' +imgURL + ')'
		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURLQuery }}></div>
					<ShelfChanger id={id} changeShelf={changeShelf} selectedOpt={selectedOpt}/>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{author}</div>
			</div>
		)
	}
}

export default Book