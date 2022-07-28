import React from 'react';
import { Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function NoUser() {
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
        Bạn cần đăng nhập để đặt hàng!
      </span>
    }
  >
    <Button onClick={() => navigate(`/login`)} type="primary">Bấm vào đây để đăng nhập</Button>
  </Empty>
        </div>
    )
}