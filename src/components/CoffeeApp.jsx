import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Edit from '../pages/Admin/AdminPages/Edit/Edit';
import Products from '../pages/Admin/AdminPages/Products/Products';
import Purchase from '../pages/Admin/AdminPages/Purchase/Purchase';
import Turnover from '../pages/Admin/AdminPages/Turnover';
import Success from '../pages/auth/Cart/CheckoutSuccess/Success';
import OrderDetail from '../pages/auth/PurchaseHistory/OrderDetail/OrderDetail';
import PurchaseHistory from '../pages/auth/PurchaseHistory/PurchaseHistory';
import DetailCoffee from '../pages/DetailCoffee/DetailCoffee';
import Header from '../pages/Header';


export function CoffeeApp() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header/>}></Route>
					<Route path='/product-detail/:id' element={<DetailCoffee/>}></Route>
					<Route path='/Login' element={<Header/>}></Route>
					<Route path='/cart' element={<Header/>}></Route>
					<Route path='/profile' element={<Header/>}></Route>
					<Route path='/other-category' element={<Header/>}></Route>
					<Route path='/coffee' element={<Header/>}></Route>
					<Route path='/register' element={<Header/>}></Route>
					<Route path='/cart/success/:id' element={<Success/>}></Route>
					<Route path='/order-list/detail:id' element={<OrderDetail></OrderDetail>}></Route>
					<Route path='/order-list/delivering' element={<PurchaseHistory/>}/>
					<Route path='/order-list/received' element={<PurchaseHistory/>}/>
					<Route path='/order-list/cancelled' element={<PurchaseHistory/>}/>
					<Route path='/order-list/confirm' element={<PurchaseHistory/>}/>
					<Route path='/dashboard' element={<Navigate to='/admin/products'/>}></Route>
					<Route path="/admin/products" element ={<Navigate to="/admin/products/all"/>}/>
					<Route path="/admin/products/all" element = {<Products/>}></Route>
					<Route path="/admin/products/coffee" element = {<Products/>}></Route>
                    <Route path="/admin/products/other" element = {<Products/>}></Route>
                    <Route path="/admin/products/add-product" element = {<Products/>}></Route>
					<Route path="/admin/purchase" element = {<Navigate to="/admin/purchase/confirm"/>}></Route>
                    <Route path="/admin/purchase/confirm" element = {<Purchase/>}></Route>                    
                    <Route path="/admin/purchase/delivering" element = {<Purchase/>}></Route>
                    <Route path="/admin/purchase/delivered" element = {<Purchase/>}></Route>
                    <Route path="/admin/purchase/cancel" element = {<Purchase/>}></Route>
                    <Route path="/admin/turnover" element = {<Turnover/>}></Route>
                    <Route path="/admin/edit/:id" element = {<Edit/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}