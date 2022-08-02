import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/auth/Cart/Cart';
import Success from '../pages/auth/Cart/CheckoutSuccess/Success';
import Login from '../pages/auth/Login/Login';
import Profile from '../pages/auth/Profile/Profile';
import OrderDetail from '../pages/auth/PurchaseHistory/OrderDetail/OrderDetail';
import PurchaseHistory from '../pages/auth/PurchaseHistory/PurchaseHistory';
import Register from '../pages/auth/Register/Register';
import DetailCoffee from '../pages/DetailCoffee/DetailCoffee';
import HomePage from '../pages/HomePage/HomePage';
import Coffee from '../pages/products/Coffee/Coffee';
import OtherCategory from '../pages/products/OtherProducts/OtherProduct';
import NavBar from './NavBar/NavBar';


export function CoffeeApp() {
	return (
		<>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path='/' element={<HomePage></HomePage>}></Route>
					<Route path='/product-detail/:id' element={<DetailCoffee></DetailCoffee>}></Route>
					<Route path='/Login' element={<Login></Login>}></Route>
					<Route path='/cart' element={<Cart></Cart>}></Route>
					<Route path='/profile' element={<Profile></Profile>}></Route>
					<Route path='/other-category' element={<OtherCategory></OtherCategory>}></Route>
					<Route path='/coffee' element={<Coffee></Coffee>}></Route>
					<Route path='/register' element={<Register></Register>}></Route>
					<Route path='/cart/success/:id' element={<Success></Success>}></Route>
					<Route path='/order-list/detail:id' element={<OrderDetail></OrderDetail>}></Route>
					<Route path='/order-list/delivering' element={<PurchaseHistory/>}/>
					<Route path='/order-list/received' element={<PurchaseHistory/>}/>
					<Route path='/order-list/cancelled' element={<PurchaseHistory/>}/>
					<Route path='/order-list/confirm' element={<PurchaseHistory/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}