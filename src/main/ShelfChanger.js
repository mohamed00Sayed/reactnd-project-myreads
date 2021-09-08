import React, { Component } from 'react'


class ShelfChanger extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			oldBookShelf: props.selectedOpt && true ? props.selectedOpt: '',
		}
		
		this.changeShelf = this.changeShelf.bind(this)
		this.setOldShelf = this.setOldShelf.bind(this)
	}
	
	changeShelf = (evt)=> {
		const bookID = evt.target.id
		const newShelf = evt.target.value
		const oldShelf = this.state.oldBookShelf
		console.log(this.state.oldBookShelf)
		this.setState({oldBookShelf: evt.target.value})
		this.props.changeShelf(oldShelf, newShelf, bookID)
		
		console.log(this.state.oldBookShelf)
		
	}
	
	setOldShelf = (evt)=> {
		console.log('in on click')
		const oldShelf = evt.target.value
		//console.log(oldShelf)
		this.setState({oldBookShelf: oldShelf})
		//console.log(this.state.oldBookShelf)
	}
	
	
	render(){
		const { id, selectedOpt } = this.props
		//console.log(selectedOpt)
		return(
			<div className="book-shelf-changer">
				<select id={id} value={selectedOpt} onChange={(evt)=> {this.changeShelf(evt)}} onClick={(evt)=> {this.setOldShelf(evt)}}>
					<option value="move" disabled>Move to...</option>
					{
						selectedOpt === 'currentlyReading' ? (<option value="currentlyReading" >Currently Reading</option>)
						:(<option value="currentlyReading">Currently Reading</option>)
					}
					
					{
						selectedOpt === 'wantToRead'?(<option value="wantToRead" >Want to Read</option>)
						:(<option value="wantToRead">Want to Read</option>)
					}
					{
						selectedOpt === 'read'?(<option value="read" >Read</option>)
						:(<option value="read">Read</option>)
					}					
					{
						selectedOpt === 'none'?(<option value="none" >None</option>)
						:(<option value="none">None</option>)
					}
				</select>
			</div>
		)
	}
}

export default ShelfChanger