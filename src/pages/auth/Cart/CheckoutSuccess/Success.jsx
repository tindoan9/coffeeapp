import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../../components/layouts/NavbarUser-Layout/components/NavBar/NavBar';

export default function Success() {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <>
        <NavBar/>
        <Result
        style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                height: '100vh', 
                flexDirection: 'column'
            }
        }   
            status="success"
            title="Đặt hàng thành công!"
            subTitle={`Mã đơn hàng: ${id}`}
            extra={[
            <Button onClick={() => navigate(`/`)} type="primary" key="console">
                Tiếp tục mua hàng
            </Button>,
            <Button onClick={() => navigate(`/order-list/confirm`)} key="buy">Xem đơn hàng</Button>,
            ]}
        />
        </>
    )
}