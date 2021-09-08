import React, { Component } from 'react'
import Shelf from './Shelf'
import { getAll, update } from '../BooksAPI'

/*
{id: '6ddhsje', title: 'Needful Things', authors: ['Stephen King'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}},
{id: '8eer', title: 'React', authors: ['Nils Hartmann'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}},
{id: '9suein', title: 'Satire TV', authors: ['Jonathan Gray'], imageLinks: {thumbnail: 'http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}}
===================
{id: '1dfd', title: 'The Linux Command Line', authors: ['William E. Shotts, Jr.'], imageLinks: {thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}},
{id: '2dss', title: 'Learning Web Development with React and Bootstrap', authors: ['Harmeet Singh'], imageLinks: {thumbnail:'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}
====================
{id:'55adf', title: 'The Cuckoo\'s Calling', authors: ['Robert Galbraith'], imageLinks:{thumbnail:'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}},
{id: '5dd6s', title: 'Lords of Finance', authors: ['Liaquat Ahamed'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}}

*/

class Library extends Component{
	constructor(props){
		super(props)
		this.changeShelf = this.changeShelf.bind(this)
		this.removeFromShelf = this.removeFromShelf.bind(this)
	}
	
	state = {
		books: [],
		currentlyReading:  {
			id: 'currentlyReading',
			title: 'Currently Reading',
			booklist: []
		},
		wantToRead: {
			id: 'wantToRead',
			title: 'Want to Read',
			booklist: []
		},
		read: {
			id: 'read',
			title: 'Read',
			booklist: []
		}
	}
	
	knowOtherShelf = (oldShelf, newShelf)=>{
		let otherShelf
		if(oldShelf === 'currentlyReading' && newShelf === 'wantToRead'){
			otherShelf = 'read'
		}
		else if(oldShelf === 'currentlyReading' && newShelf === 'read'){
			otherShelf = 'wantToRead'
		}
		else if(oldShelf === 'wantToRead' && newShelf === 'currentlyReading'){
			otherShelf = 'read'
		}
		else if(oldShelf === 'wantToRead' && newShelf === 'read'){
			otherShelf = 'currentlyReading'
		}
		else if(oldShelf === 'read' && newShelf === 'currentlyReading'){
			otherShelf = 'wantToRead'
		}
		else if(oldShelf === 'read' && newShelf === 'wantToRead'){
			otherShelf = 'currentlyReading'
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
					console.log('book id:' + book.id)
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
		if(shelf === 'currentlyReading'){
			other1 = 'read'
			other2 = 'wantToRead'
		}
		else if(shelf === 'wantToRead'){
			other1 = 'currentlyReading'
			other2 = 'read'
		}
		else if(shelf === 'read'){
			other1 = 'currentlyReading'
			other2 = 'wantToRead'
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
			if(book.shelf === 'currentlyReading'){
				ofCurrentlyReading.push(book)
			}
			else if(book.shelf === 'wantToRead'){
				ofWantToRead.push(book)
			}
			else if (book.shelf === 'read'){
				ofRead.push(book)
			}
		})
		return {ofCurrentlyReading, ofWantToRead, ofRead}
		
	}
	
	componentDidMount(){
		console.log('in componentDidMount')
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
		
		//console.log(this.state.currentlyReading.booklist)
		//console.log(this.state.wantToRead.booklist)
		//console.log(this.state.read.booklist)
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