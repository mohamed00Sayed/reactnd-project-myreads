import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{
	
	render(){
		return(
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						this.props.booklist.map((book) => (
							<li key={book.id}>
								<Book 
									title={book.title}
									author={book.authors[0]}
									imgURL={book.imageLinks.thumbnail}
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