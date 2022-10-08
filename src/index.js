import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter basename="my-reads-library-ms.netlify.app">
		<App />
	</BrowserRouter>
	, document.getElementById('root'))
