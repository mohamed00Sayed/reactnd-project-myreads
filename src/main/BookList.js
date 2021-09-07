import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{
	
	render(){
		return(
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						this.props.booklist.map((book) => (
							<li>
								<Book 
									title={book.title}
									author={book.author}
									imgURL={book.imgURL}
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