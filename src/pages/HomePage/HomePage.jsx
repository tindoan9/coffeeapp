import React from 'react';
import Banner from '../../assets/banner-pagehome.webp'
import Footer from './Footer/Footer';
import ListProduct from './ListProduct/ListProduct';

export default function HomePage() {
	return (
		<>
			<div className="banner">
				<img src={Banner} alt="" />
				<div className="title">
					<h1>Cà phê ngon sẽ luôn tìm được khách hàng</h1>
					<h3>Chúng tôi cung cấp nhiều loại cà phê độc đáo và ngon nhất</h3>
					<button class="btn-41"><span>Order Now</span></button>
				</div>
			</div>
			<ListProduct></ListProduct>
			<Footer></Footer>
		</>
	)
}