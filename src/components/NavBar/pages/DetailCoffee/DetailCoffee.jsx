import React from 'react';
import { Radio } from 'antd';
import { useState } from 'react';
import coffee from '../../../../assets/coffee.jpg'

export default function DetailCoffee() {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            <div className="product__detail">
                <div className="img__product">
                    <img src={coffee} alt="" />
                    <div className="description__product">
                        <span>Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.</span>
                    </div>
                </div>
                <div className="options__product">
                    <h2>Name Product</h2>
                    <span>Price</span>
                    <div className="option__quantity">
                        <button className='desc'>-</button>
                        <span>1</span>
                        <button className='asc'>+</button>
                    </div>
                    <div className="option__size">
                        <p>Choose Size</p>
                        <div className="type__size">
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={0}>Nhỏ + 0đ</Radio>
                                <Radio value={6000}>Vừa + 6.000đ</Radio>
                                <Radio value={10000}>Lớn + 10.000đ</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <button>Thêm vào giỏ hàng - 31.000đ</button>
                </div>
            </div>
        </>
    )
}