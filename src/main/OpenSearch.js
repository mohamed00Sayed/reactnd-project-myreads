import React, { Component } from 'react'

function OpenSearch(props){
	return(
		<div className="open-search">
			<a onClick={()=> {props.onAdd()}}>Add a book</a>
		</div>
	)	
}

export default OpenSearch