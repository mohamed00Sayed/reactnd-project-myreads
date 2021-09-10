import React from 'react'
import './App.css'
import Main from './main/Main'
import Search from './search/Search'
import { Route } from 'react-router-dom'

function BooksApp(){
	return (
		<div>
			<Route exact path='/' render={({ history })=> (
				<Main 
					onAdd={()=> {history.push('/search')}}
				/>
			)} />
			<Route path='/search' render={()=> (<Search />)} />
		</div>
	)	
}

export default BooksApp
