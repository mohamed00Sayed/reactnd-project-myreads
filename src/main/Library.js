import React, { Component } from 'react'
import Shelf from './Shelf'
import { getAll, update } from '../BooksAPI'

const shelves = {
	currentlyReading: ['Currently Reading', 'currentlyReading'],
	wantToRead: ['Want to Read', 'wantToRead'],
	read: ['Read', 'read']
}

class Library extends Component{
	constructor(props){
		super(props)
		this.changeShelf = this.changeShelf.bind(this)
		this.removeFromShelf = this.removeFromShelf.bind(this)
	}
	
	state = {
		books: [],
		currentlyReading:  {
			id: shelves.currentlyReading[1],
			title: shelves.currentlyReading[0],
			booklist: []
		},
		wantToRead: {
			id: shelves.wantToRead[1],
			title: shelves.wantToRead[0],
			booklist: []
		},
		read: {
			id: shelves.read[1],
			title: shelves.read[0],
			booklist: []
		}
	}
	
	knowOtherShelf = (oldShelf, newShelf)=>{
		let otherShelf
		if(oldShelf === shelves.currentlyReading[1] && newShelf === shelves.wantToRead[1]){
			otherShelf = shelves.read[1]
		}
		else if(oldShelf === shelves.currentlyReading[1] && newShelf === shelves.read[1]){
			otherShelf = shelves.wantToRead[1]
		}
		else if(oldShelf === shelves.wantToRead[1] && newShelf === shelves.currentlyReading[1]){
			otherShelf = shelves.read[1]
		}
		else if(oldShelf === shelves.wantToRead[1] && newShelf === shelves.read[1]){
			otherShelf = shelves.currentlyReading[1]
		}
		else if(oldShelf === shelves.read[1] && newShelf === shelves.currentlyReading[1]){
			otherShelf = shelves.wantToRead[1]
		}
		else if(oldShelf === shelves.read[1] && newShelf === shelves.wantToRead[0]){
			otherShelf = shelves.currentlyReading[1]
		}
		
		return otherShelf
	}
			
	changeShelf = (oldShelf, newShelf, bookID)=>{
		let otherShelf = this.knowOtherShelf(oldShelf, newShelf)
		let removedBook
		
		this.setState((prev)=> {
			
			prev.books.map((book)=>{
				if(book.id === bookID){
					removedBook = book
				}
			})

			const newBooksofOldShelf = prev[oldShelf].booklist.filter((book)=> {
				if(book.id !== bookID){
					return book
				}
			})
			
			removedBook.shelf = newShelf
			const newBooksofNewShelf = prev[newShelf].booklist
			newBooksofNewShelf.push(removedBook)
			
			return{
				[oldShelf] :  {
					id: prev[oldShelf].id,
					title: prev[oldShelf].title,
					booklist: newBooksofOldShelf
				},
				[newShelf] : {
					id: prev[newShelf].id,
					title: prev[newShelf].title,
					booklist: newBooksofNewShelf
				},
				[otherShelf] : {
					id: prev[otherShelf].id,
					title: prev[otherShelf].title,
					booklist: prev[otherShelf].booklist
				} 
			}
		})
	}

	removeFromShelf = (shelf, bookID)=>{
		let other1
		let other2
		if(shelf === shelves.currentlyReading[1]){
			other1 = shelves.read[1]
			other2 = shelves.wantToRead[1]
		}
		else if(shelf === shelves.wantToRead[1]){
			other1 = shelves.currentlyReading[1]
			other2 = shelves.read[1]
		}
		else if(shelf === shelves.read[1]){
			other1 = shelves.currentlyReading[1]
			other2 = shelves.wantToRead[1]
		}
		
		
		this.setState((prev) => {
			let removedBook
			const newShelfBooks = prev[shelf].booklist.filter((book)=> {
				if(book.id !== bookID){
					return book
				}else{
					removedBook = book
				}
			})
			update(removedBook, 'none')
			
			return ({
				books: [...newShelfBooks, ...prev[other1].booklist, ...prev[other2].booklist],
				[shelf]: {
					id: prev[shelf].id,
					title: prev[shelf].title,
					booklist: newShelfBooks
				},
				[other1]: {
					id: prev[other1].id,
					title: prev[other1].title,
					booklist: prev[other1].booklist
				},
				[other2]: {
					id: prev[other2].id,
					title: prev[other2].title,
					booklist: prev[other2].booklist
				}
				
			})
			
		})
	}
	
	categorizeBooks = (books)=>{
		let ofCurrentlyReading = []
		let ofWantToRead = []
		let ofRead = []
		books.map((book)=> {
			if(book.shelf === shelves.currentlyReading[1]){
				ofCurrentlyReading.push(book)
			}
			else if(book.shelf === shelves.wantToRead[1]){
				ofWantToRead.push(book)
			}
			else if (book.shelf === shelves.read[1]){
				ofRead.push(book)
			}
		})
		return {ofCurrentlyReading, ofWantToRead, ofRead}
		
	}
	
	componentDidMount(){
		getAll().then((theBooks)=> {
			const { ofCurrentlyReading, ofWantToRead, ofRead } = this.categorizeBooks(theBooks)
			this.setState((prev) => {
				return({
					books: theBooks,
					currentlyReading: {
						id: prev.currentlyReading.id,
						title: prev.currentlyReading.title,
						booklist: ofCurrentlyReading
					},
					wantToRead: {
						id: prev.wantToRead.id,
						title: prev.wantToRead.title,
						booklist: ofWantToRead
					},
					read: {
						id: prev.read.id,
						title: prev.read.title,
						booklist: ofRead
					}
				})
				
			})
		})		
	}
	
	
	render(){
		
		return(
			<div className="list-books-content">
				<Shelf 
					shelfTitle={this.state.currentlyReading.title} 
					booklist={this.state.currentlyReading.booklist} 
					changeShelf={this.changeShelf}
					onNone={this.removeFromShelf}
				/>
				<Shelf 
					shelfTitle={this.state.wantToRead.title}
					booklist={this.state.wantToRead.booklist}
					changeShelf={this.changeShelf}
					onNone={this.removeFromShelf}
				/>
				<Shelf 
					shelfTitle={this.state.read.title} 
					booklist={this.state.read.booklist}
					changeShelf={this.changeShelf}
					onNone={this.removeFromShelf}
				/>
			</div>
		)
	}
}

export default Library