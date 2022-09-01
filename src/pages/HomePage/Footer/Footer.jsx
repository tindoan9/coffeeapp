import React from 'react'
import Footer from '../../../assets/footer.jpg'
import LogoFooter from '../../..//assets/logo-page.png'
import Read from '../../../assets/read-content.jpg'

export default function FooterCbn() {
	return (
		<>
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
			<div className="footer">
				<img src={Footer} alt="" />
				<div className="footer__logo">
					<img src={LogoFooter} alt="" />
				</div>
			</div>
		</>
	)
}