import React from 'react'
import Footer from '../../../../../assets/footer.jpg'
import LogoFooter from '../../../../../assets/logo-page.png'
import Read from '../../../../../assets/read-content.jpg'

export default function FooterCbn() {
	return (
		<>
			<div className="read__content">
				<div className="img">
					<img src={Read} alt="" />
				</div>
				<div className="read">
					<h2>Best Coffee House In Your Home Tuwn</h2>
					<p>Our incredibly rate come from humble beginnings in yemen, where decades of political turmoil once forced local farmers to start growing khat, a narcotic native to the Arabian Peninsula.</p>
					<p>The Dawoodi Bohara Community changed this, removing all the khat plants and replacing them with coffee, bringing this humble brew black to it's</p>
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