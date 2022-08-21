import React from 'react'
import Footer from '../../../assets/footer.jpg'
import LogoFooter from '../../..//assets/logo.174bdfd.svg'
import active from '../../..//assets/active.4cba64f.png'

export default function FooterCbn() {
	return (
		<>
			<div className="footer">
				<img src={Footer} alt="" />
				<div className="footer__logo">
					<img src={LogoFooter} alt="" />
				</div>
				<div className="footer__content">
					<div className="list__content">
						<div className="hotline">
							<b>- Hotline</b>
							<ul>
								<li>Đặt Hàng: 1800 6939 (07:00 - 20:30)</li>
								<li>Hỗ trợ: 028.71.087088 (07:00 - 21:00)</li>
							</ul>
						</div>
						<div className="address">
							<b>- Thông tin</b>
							<ul>
								<li>Head Office 1: 86 - 88 Cao Thắng, Ward 4, District 3, Hồ Chí Minh, Việt Nam</li>
								<li>Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Điện Biên Phủ, Ward 15, Bình Thạnh District , Hồ Chí Minh, Việt Nam</li>
								<li>+842871 078 079</li>
								<li>hi@thecoffeehouse.vn</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer__active">
					<span>Copyright © 2021 The Coffee House. All rights reserved.</span>
					<img src={active} alt="" />
				</div>
			</div>
		</>
	)
}