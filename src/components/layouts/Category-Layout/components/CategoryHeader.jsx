import React from 'react';
import { NavLink } from "react-router-dom";
import {ShopOutlined} from '@ant-design/icons';

export default function CategoryHeader() {
    return (
        <>
            <div className='category__header'>
                <h1 className='title__category'><ShopOutlined /> Sản phẩm</h1>
                <div className="category__item">
                    <NavLink to={'/products/coffee'}>
                        <p>Cà Phê</p>
                    </NavLink>
                    <NavLink to={'/products/tra-trai-cay-tra-sua'}>
                        <p>Trà cái cây - trà sữa</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}