import React from 'react';
import Banner from '../../../../images/banner-pagehome.webp'

export default function HomePage() {
	return (
		<>
			<div className="banner">
				<img src={Banner} alt="" />
				<div className="title">
					<h1>Good Coffee Will Always Find the Audience</h1>
					<h3>We provide a variety of unique and Best Coffee</h3>
					<button class="btn-41"><span>Order Now</span></button>
				</div>
			</div>

		</>
	)
}