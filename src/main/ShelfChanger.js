import React, { Component } from 'react'


class ShelfChanger extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			oldBookShelf: props.selectedOpt && true ? props.selectedOpt: '',
			selectedOpt: props.selectedOpt && true ? props.selectedOpt: ''
		}
		
		this.changeShelf = this.changeShelf.bind(this)
		this.setOldShelf = this.setOldShelf.bind(this)
		this.deleteBook = this.deleteBook.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	deleteBook = (evt)=>{
		const bookID = evt.target.id
		const oldShelf = this.state.oldBookShelf
		this.props.onNone(oldShelf, bookID)
	}
	
	changeShelf = (evt)=> {
		const bookID = evt.target.id
		const newShelf = evt.target.value
		const oldShelf = this.state.oldBookShelf
		this.props.changeShelf(oldShelf, newShelf, bookID)
	}
	
	handleChange = (evt)=>{
		const selectedVal = evt.target.value
		const onMain = this.props.onMain
		if(onMain){
			if(selectedVal === 'none'){
				this.deleteBook(evt)
			}
			else{
				this.changeShelf(evt)
			}			
		}
		else{
			const bookID = evt.target.id
			if(selectedVal === 'none'){
				this.deleteBook(evt)
			}
			else{
				this.setState({oldBookShelf: evt.target.value, selectedOpt: evt.target.value})
				this.props.changeShelf(bookID, selectedVal)
			}
		}
	}
	
	setOldShelf = (evt)=> {
		this.setState({oldBookShelf: evt.target.value})
	}
	
	
	render(){
		const { id } = this.props
		return(
			<div className="book-shelf-changer">
				<select id={id} value={this.state.selectedOpt} onChange={(evt)=> {this.handleChange(evt)}} onClick={(evt)=> {this.setOldShelf(evt)}}>
					<option value="move" disabled>Move to...</option>
					{
						this.state.selectedOpt === 'currentlyReading' ? (<option value="currentlyReading" >Currently Reading</option>)
						:(<option value="currentlyReading">Currently Reading</option>)
					}
					
					{
						this.state.selectedOpt === 'wantToRead'?(<option value="wantToRead" >Want to Read</option>)
						:(<option value="wantToRead">Want to Read</option>)
					}
					{
						this.state.selectedOpt === 'read'?(<option value="read" >Read</option>)
						:(<option value="read">Read</option>)
					}					
					{
						this.state.selectedOpt === 'none'?(<option value="none" >None</option>)
						:(<option value="none">None</option>)
					}
				</select>
			</div>
		)
	}
}

export default ShelfChanger