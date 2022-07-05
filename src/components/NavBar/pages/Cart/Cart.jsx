import React, { useState } from 'react';
import { Button, message, Radio, Space } from 'antd';
import coffee from '../../../../assets/coffee.jpg'

export default function Cart() {
	const [value, setValue] = useState(1);

	const onChange = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};

	const success = () => {
		message.success('Chúng tôi sẽ liên hệ sớm đến bạn để xác nhận đơn hàng ^-^', 5);
	};

	return (
		<div className='cart'>
			<h1>Xác Nhập đơn hàng</h1>
			<div className="order">
				<div className="info__member">
					<h2>Giao hàng</h2>
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<input type="text" placeholder='Thêm Địa Chỉ' />
					<h2>Phương thức thanh toán</h2>
					<Radio.Group onChange={onChange} value={value}>
						<Space direction="vertical">
							<Radio value={1}>Tiền mặt</Radio>
							<Radio value={2}>Option B</Radio>
							<Radio value={3}>Option C</Radio>
						</Space>
					</Radio.Group>
				</div>
				<div className="order__product">
					<h2>Sản phẩm đả chọn</h2>
					<div className="select__product">
						<div className="img">
							<img src={coffee} alt="OT" />
						</div>
						<div className="infi">
							<b><span>1</span> x Name product</b>
							<p>Size <span>nhỏ</span></p>
							<b>Xóa</b>
						</div>
						<div className="price">
							<span>29.000đ</span>
						</div>
					</div>

					<h2>Tổng cộng</h2>
					<div className="total">
						<span>thành tiền</span>
						<span>29.000đ</span>
					</div>
					<div className="transport__fee">
						<span>Phí vận chuyển</span>
						<span>10.000đ</span>
					</div>
					<div className="payment">
						<div className="bill">
							<p>Đơn hàng: <span>12.000đ</span></p>
						</div>
						<div className="payment__btn">
							<Button onClick={success}>Đặt Hàng</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}