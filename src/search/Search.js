import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { search, update } from '../BooksAPI'

class Search extends Component{
	constructor(props){
		super(props)
		this.searchDatabase = this.searchDatabase.bind(this)
		this.changeShelf = this.changeShelf.bind(this)
	}
	
	state={
		books: []
	}
	
	searchDatabase = (query)=>{
		search(query).then((theBooks)=> {
			return theBooks
		}).then((books)=>{
			if(books === undefined || books.error==='empty query'){
				console.log('error')
				console.log(books)
				this.setState({
					books: []
				})
			}else{
				console.log(books)
				this.setState({
					books
				})
			}
			
		})

	}
		
	changeShelf = (bookID, shelf)=>{
		let theBook
		const filteredBooks = this.state.books.filter((book)=>{
			if(book.id === bookID){
				theBook = book
			}else{
				return book
			}
		})
		theBook.shelf = shelf
		update(theBook, shelf)
		this.setState((prev)=>{
			if(shelf === 'none'){
				return({
					books: filteredBooks
				})
			}
			else{
				return({nothing: ''})
			}
		})
		
	}
	
	//here handle input to make requests to the API
	// and then send the result to the search results
	//here add the shelfChanger function 
	//which also asks another helper function to 
	//update the API
	// also onNone which has to update the API
	
	
	
	render(){
		return(
			<div className="search-books">
				<SearchBar onSearch={this.searchDatabase}/>
				<SearchResults 
					books={this.state.books} 
					changeShelf={this.changeShelf}
				/>
			</div>
		)
	}
}

export default Search