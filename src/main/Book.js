import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

function Book(props){
	const { title, authors, imageLinks, id, changeShelf, selectedOpt, onNone, onMain } = props
	const titleWords = title.split(' ')
	let textOfTitle = ''
	titleWords.forEach((word)=> {
		textOfTitle = textOfTitle + '%20'+word
	})
	const imgURLQuery = `url(${imageLinks && imageLinks.thumbnail?`${imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=${textOfTitle}`})`
	return(
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imgURLQuery }}></div>
				<ShelfChanger 
					id={id} 
					changeShelf={changeShelf} 
					selectedOpt={selectedOpt}
					onNone={onNone}
					onMain={onMain}
				/>
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">{Array.isArray(authors)?authors.join(', '):'Unknown Author'}</div>
		</div>
	)	
}

export default Book