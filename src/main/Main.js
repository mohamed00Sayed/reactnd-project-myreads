import React, { Component } from 'react'
import Header from './Header'
import Library from './Library'

class Main extends Component{
	
	render(){
		return(
			<div>
				<h3>Main Component</h3>
				<Header />
				<Library />
			</div>
		)
	}
}

export default Main