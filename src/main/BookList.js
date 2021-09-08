import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{
	
	render(){
		
		const { books, changeShelf } = this.props
		return(
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						books.map((book) => (
							<li key={book.id}>
								<Book 
									title={book.title}
									author={book.authors[0]}
									imgURL={book.imageLinks.thumbnail}
									id={book.id}
									changeShelf={changeShelf}
									selectedOpt={book.shelf}
								/>
							</li>
						))
					}
				</ol>
				
			</div>
		)
	}
}

export default BookList