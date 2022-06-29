import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import HomePage from './NavBar/pages/HomePage/HomePage';

export function CoffeeApp() {
	return (
		<>
			<BrowserRouter>
				<NavBar></NavBar>
				<HomePage></HomePage>
			</BrowserRouter>
		</>
	)
}