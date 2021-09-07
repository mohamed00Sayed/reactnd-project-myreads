import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component{
	
	render(){
		return(
			<div>
				<h4>Library Component</h4>
				<Shelf />
				<Shelf />
				<Shelf />
			</div>
		)
	}
}

export default Library