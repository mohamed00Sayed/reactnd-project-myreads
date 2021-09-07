import React, { Component } from 'react'
import Header from './Header'
import Library from './Library'
import OpenSearch from './OpenSearch'

class Main extends Component{
	
	render(){
		return(
			<div className="list-books">
				<Header />
				<Library />
				<OpenSearch onAdd={this.props.onAdd}/>
			</div>
		)
	}
}

export default Main