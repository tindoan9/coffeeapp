import React from 'react';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import Banner4 from '../../assets/banner4.jpg';
import Read from '../../assets/read-content.jpg'
import { Carousel } from 'antd';
import ListProduct from './ListProduct/ListProduct';


export default function HomePage() {
	return (
		<>
			<div className="banner">
				<Carousel autoplay>
					<div>
					<img src={Banner1} alt="" />
					</div>
					<div>
					<img src={Banner2} alt="" />
					</div>
					<div>
					<img src={Banner3} alt="" />
					</div>
					<div>
					<img src={Banner4} alt="" />
					</div>
				</Carousel>
			</div>
			<ListProduct/>
			<div className="read__content">
				<div className="img">
					<img src={Read} alt="" />
				</div>
				<div className="read">
					<h2>Quán cà phê ngon nhất ở quê hương của bạn</h2>
					<p>Tỷ lệ đáng kinh ngạc của chúng tôi đến từ sự khởi đầu khiêm tốn ở Yemen, nơi mà nhiều thập kỷ bất ổn chính trị đã từng buộc nông dân địa phương bắt đầu trồng khat, một loại ma túy có nguồn gốc từ Bán đảo Ả Rập.</p>
					<p>Cộng đồng Dawoodi Bohra đã thay đổi điều này, loại bỏ tất cả các cây khat và thay thế chúng bằng cà phê, mang lại màu đen cho loại bia khiêm tốn này</p>
				</div>
			</div>
		</>
	)
}