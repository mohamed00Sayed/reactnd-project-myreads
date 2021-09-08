import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component{
	
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			query: ''
		}
	}
	
	handleChange = (evt)=>{
		const query = evt.target.value
		this.setState({query})
		
		this.props.onSearch(query)
		
	}
	
	
	render(){
		return(
			<div className="search-books-bar">
				<Link to='/' className="close-search">Close</Link>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author" onChange={(evt)=> {this.handleChange(evt)}}/>
				</div>
			</div>
		)
	}
}

export default SearchBar