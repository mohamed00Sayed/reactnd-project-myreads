import React, { Component } from 'react'
import Book from '../main/Book'

class SearchResults extends Component{
	
	render(){
		const { books, changeShelf, onNone, booksIDs, booksByIDs} = this.props
		return(
			<div className="search-books-results">
				<ol className="books-grid">
					{
						books.map((book)=> (
							<li key={book.id}>
								{
									booksIDs.includes(book.id)? (
										<Book 
											title={book.title}
											authors={book.authors}
											imageLinks={book.imageLinks}
											id={book.id}
											changeShelf={changeShelf}
											selectedOpt={booksByIDs[book.id].shelf}
											onNone={onNone}
											onMain={false}
											
										/>
									):(
										<Book 
											title={book.title}
											authors={book.authors}
											imageLinks={book.imageLinks}
											id={book.id}
											changeShelf={changeShelf}
											selectedOpt={'none'}
											onNone={onNone}
											onMain={false}
											
										/>
									)
								}
								
								
							</li>
						))
					}
				</ol>
			</div>
		)
	}
}

export default SearchResults