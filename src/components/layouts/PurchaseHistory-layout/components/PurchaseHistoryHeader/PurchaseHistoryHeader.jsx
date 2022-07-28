import React from 'react';
import { NavLink } from "react-router-dom";

const orderRouter = {
    confirm: {name: 'Chờ xác nhận', url: '/order-list/confirm'},
    delivering: {name: 'Đang giao', url: '/order-list/delivering'},
    received: {name: 'Đã nhận', url: '/order-list/received'},
    cancelled: {name: 'Đã hủy', url: '/order-list/cancelled'}
}

export default function PurchaseHistoryHeader() {
    return (
        <div className='order__list'>
            <div className="menu__status">
                {Object.entries(orderRouter).map(([key, value]) => {
                    return (      
                            <NavLink key={key} to={value.url}><p>{value.name}</p></NavLink>
                            )
                        })}
            </div>
        </div>
    )
}