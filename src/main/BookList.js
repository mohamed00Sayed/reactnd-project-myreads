import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{
	
	render(){
		
		const { books, changeShelf, onNone } = this.props
		return(
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						books.map((book) => (
							<li key={book.id}>
								<Book 
									title={book.title}
									authors={book.authors}
									imageLinks={book.imageLinks}
									id={book.id}
									changeShelf={changeShelf}
									selectedOpt={book.shelf}
									onNone={onNone}
									onMain={true}
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