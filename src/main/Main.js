import React, { Component } from 'react'
import Header from './Header'
import Library from './Library'
import OpenSearch from './OpenSearch'

function Main(props){
	return(
		<div className="list-books">
			<Header />
			<Library />
			<OpenSearch onAdd={props.onAdd}/>
		</div>
	)
}

export default Main