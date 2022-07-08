import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import Cart from './NavBar/pages/Cart/Cart';
import DetailCoffee from './NavBar/pages/DetailCoffee/DetailCoffee';
import HomePage from './NavBar/pages/HomePage/HomePage';
import Login from './NavBar/pages/Login/Login';
import Profile from './NavBar/pages/Profile/Profile';

export function CoffeeApp() {
	return (
		<>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path='/' element={<HomePage></HomePage>}></Route>
					<Route path='/product-detail' element={<DetailCoffee></DetailCoffee>}></Route>
					<Route path='/Login' element={<Login></Login>}></Route>
					<Route path='/cart' element={<Cart></Cart>}></Route>
					<Route path='/profile' element={<Profile></Profile>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}