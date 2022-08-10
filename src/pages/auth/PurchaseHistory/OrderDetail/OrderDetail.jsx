import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../../../components/layouts/NavbarUser-Layout/components/NavBar/NavBar'
import { cancelOrderAction } from '../../../../stores/slices/cart.slice'

export default function OrderDetail() {
    const { id } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userName = location?.state?.userName
    const phone = location?.state?.phone
    const address = location?.state?.address
    const status = location?.state?.status
    const listProductOrder = location?.state?.listProductOrder

    const handleCancelledOrder = () => {
        dispatch(cancelOrderAction({id, status: 'Đã hủy'}))
        navigate(`/order-list/confirm`)
    }

    return (
        <>
        <NavBar/>
            <div className="order__detail">
                <div className="form__order__detail">
                    <div className="product__order__info">
                        {listProductOrder?.map?.(item => {
                            return (
                                <div key={item.id} className="order__item">
                                    <img src={item.image} alt="OT" />
                                    <p><span>{item.count}</span>x {item.productName} <p>Size {item.size.label}</p></p>
                                    <span>{item.total}.000đ</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="user__order__info">
                        <p><span>Họ và tên</span>: {userName}</p>
                        <p><span>Số điện thoại</span>: {phone}</p> 
                        <p><span>Địa chỉ</span>: {address}</p>
                        <div className="handle__order">
                            {status === 'Chờ xác nhận' ? <Button onClick={handleCancelledOrder} danger>Hủy đơn hàng</Button> : ''}
                            <Button type="dashed">{status}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}