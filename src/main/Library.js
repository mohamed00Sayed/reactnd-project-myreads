import React, { Component } from 'react'
import Shelf from './Shelf'
import { getAll } from '../BooksAPI'


let shelf1 = {
	title: 'Currently Reading',
	booklist: [
		{id: '1dfd', title: 'The Linux Command Line', authors: ['William E. Shotts, Jr.'], imageLinks: {thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}},
		{id: '2dss', title: 'Learning Web Development with React and Bootstrap', authors: ['Harmeet Singh'], imageLinks: {thumbnail:'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}
	]
}
let shelf2 = {
	title: 'Want to Read',
	booklist: [
		{id:'55adf', title: 'The Cuckoo\'s Calling', authors: ['Robert Galbraith'], imageLinks:{thumbnail:'http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}},
		{id: '5dd6s', title: 'Lords of Finance', authors: ['Liaquat Ahamed'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}}
	]
}
let shelf3 = {
	title: 'Read',
	booklist: [
		{id: '6ddhsje', title: 'Needful Things', authors: ['Stephen King'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}},
		{id: '8eer', title: 'React', authors: ['Nils Hartmann'], imageLinks:{thumbnail: 'http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}},
		{id: '9suein', title: 'Satire TV', authors: ['Jonathan Gray'], imageLinks: {thumbnail: 'http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'}}
	]
}

const initials1 = [
	'The Linux Command Line',
	'Learning Web Development with React and Bootstrap'
]
const initials2 = [
	'The Cuckoo\'s Calling',
	'Lords of Finance'
]
const initials3 = [
	'Needful Things',
	'React',
	'Satire TV'
]

class Library extends Component{
	state = {
		books: []
	}
	
	categorizeBooks(books){
		books.map((book)=> {
			if(book.shelf === 'currentlyReading'){
				if(!initials1.includes(book.title)){
					shelf1.booklist.push(book)
				}	
			}
			else if(book.shelf === 'wantToRead'){
				if(!initials2.includes(book.title)){
					shelf2.booklist.push(book)
				}
			}
			else if(book.shelf === 'read'){
				if(!initials3.includes(book.title)){
					shelf3.booklist.push(book)
				}
			}
			return null
		})
	}
	
	componentDidMount(){
		getAll().then((books)=> {
			console.log(books)
			this.setState(()=> {
				this.categorizeBooks(books)
				return ({books})
			})
			
			return books
		})
		
		
	}
	
	componentWillUnmount(){
		this.setState({books: []})
	}
	
	render(){
		return(
			<div className="list-books-content">
				<Shelf shelfData={shelf1}/>
				<Shelf shelfData={shelf2}/>
				<Shelf shelfData={shelf3}/>
			</div>
		)
	}
}

export default Library