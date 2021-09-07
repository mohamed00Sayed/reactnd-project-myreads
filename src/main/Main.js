import React, { Component } from 'react'
import Header from './Header'
import Library from './Library'

class Main extends Component{
	
	render(){
		return(
			<div className="list-books">
				<Header />
				<Library />
			</div>
		)
	}
}

export default Main