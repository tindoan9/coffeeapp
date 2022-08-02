import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import HomePage from './NavBar/pages/HomePage/HomePage';

export function CoffeeApp() {
	return (
		<>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path='/' element={<HomePage></HomePage>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}