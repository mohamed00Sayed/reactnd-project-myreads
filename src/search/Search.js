import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { getAll, search, update } from '../BooksAPI'

class Search extends Component{
	constructor(props){
		super(props)
		this.searchDatabase = this.searchDatabase.bind(this)
		this.changeShelf = this.changeShelf.bind(this)
	}
	
	state={
		books: [],
		booksIDs: [],
		booksByIDs: {}
	}
	
	searchDatabase = (query)=>{
		search(query).then((theBooks)=> {
			return theBooks
		}).then((books)=>{
			if(books === undefined || books.error==='empty query'){
				this.setState({
					books: []
				})
			}else{
				this.setState({
					books
				})
			}
			
		})

	}
		
	changeShelf = (bookID, newShelf)=>{
		let theBook = {id: bookID, shelf: newShelf}
		update(theBook, newShelf)
	}
	
	
	
	removeFromShelf = (shelf, bookID)=>{
		//shelf parameter is just passed to be consistent with the removeFromShelf
		//method in Library Component, I decided not to make its implementation like this because
		//it would require me to make an API request to update the whole library with
		//the new books (which will not include the one jsut has been deleted)
		//instead I remove the book from the state of the library and make the API call 
		//for just that delete so the refresh would include the changes.
		//That way I found it faster! Also changeShelf here got the same idea
		let removedBook = {id: bookID}
		update(removedBook, 'none')
	}
	
	
	componentDidMount(){
		getAll().then((books)=>{
			let booksIDs = []
			let booksByIDs = {}
			books.map((book)=>{
				if(book && book.id){
					booksIDs.push(book.id)
					booksByIDs[book.id] = book
				}
			})
			
			this.setState({
				booksIDs,
				booksByIDs
			})
			
			
		})
	}
	
	
	render(){
		return(
			<div className="search-books">
				<SearchBar onSearch={this.searchDatabase}/>
				<SearchResults 
					books={this.state.books}
					booksIDs={this.state.booksIDs}
					booksByIDs={this.state.booksByIDs}
					changeShelf={this.changeShelf}
					onNone={this.removeFromShelf}
				/>
			</div>
		)
	}
}

export default Search