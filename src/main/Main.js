import React, { Component } from 'react'
import Header from './Header'
import Library from './Library'

class Main extends Component{
	
	render(){
		return(
			<div>
				<Header />
				<Library />
			</div>
		)
	}
}

export default Main