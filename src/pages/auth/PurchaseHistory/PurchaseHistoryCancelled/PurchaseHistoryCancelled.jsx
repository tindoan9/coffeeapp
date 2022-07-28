import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { fetchOrderAction } from '../../../../stores/slices/cart.slice';

export default function PurchaseHistoryCancelled() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.userInfoState);
    const cartState = useSelector(state => state.cart.cartState);

    const userId = userInfo.data.id
    const data = cartState.data;

    useEffect(() => {
        dispatch(fetchOrderAction());
    }, []);

    const handleOrderDetail = (item) => {
        navigate(`/order-list/detail${item.id}`, { state: { ...item } })
    }

    return (
        <>
            <div className="purchase__history__form">
                <div className="confirm__form">
                    <div className="content">
                        <b>Mã sản phẩm</b>
                        <b>Ngày đặt</b>
                        <b>Tổng tiền</b>
                        <span></span>
                    </div>
                        {data.map(item => {
                            if(item.userId === userId && item.status === "Đã hủy"){
                                return (
                                    <div key={item.id} className="list__order">
                                        <p className='id__order'>{item.id}</p>
                                        <p>{item.date}</p>
                                        <p>{item.totalBill}.000đ</p>
                                        <Button onClick={() => handleOrderDetail(item)}>Xem chi tiết đơn hàng</Button>
                                    </div>
                                )
                            }
                        })}
                </div>
            </div>
        </>
    )
}