import React, { Component } from 'react'
import Book from '../main/Book'

class SearchResults extends Component{
	

	
	
	
	render(){
		const { books, changeShelf, onNone} = this.props
		return(
			<div className="search-books-results">
				<ol className="books-grid">
					{
						books.map((book)=> (
							<li key={book.id}>
								<Book 
									title={book.title}
									author={book.authors !== undefined? book.authors[0]: 'Unknown Author'}
									imgURL={book.imageLinks.thumbnail}
									id={book.id}
									changeShelf={changeShelf}
									selectedOpt={book.shelf===undefined ? 'none': book.shelf}
									onNone={onNone}
									onMain={false}
								/>
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

export default SearchResults