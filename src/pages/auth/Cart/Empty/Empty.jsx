import React from 'react';
import { Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function EmptyComp() {
    const navigate = useNavigate()
    return (
        <div className='empty'>
            <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 100,
    }}
    description={
      <span>
        Chưa có sản phẩm nào trong giỏ hàng
      </span>
    }
  >
    <Button onClick={() => navigate(`/`)} type="primary">Tiếp tục mua sắm</Button>
  </Empty>
        </div>
    )
}