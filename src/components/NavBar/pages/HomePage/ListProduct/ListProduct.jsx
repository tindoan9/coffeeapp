import React from 'react'
import { NavLink } from 'react-router-dom'
import coffee from '../../../../../assets/coffee.jpg'

export default function ListProduct() {
	return (
		<>
			<h2 className='title__product'>Sản phẩm từ nhà làm</h2>
			<div className='list__product'>
				<div className="item">
					<NavLink to={'/product-detail'}>
						<img src={coffee} alt="" />
						<p>Coffee Milk</p>
						<span>15.000k</span>
					</NavLink>
					<button>+</button>
				</div>
			</div>
		</>
	)
}