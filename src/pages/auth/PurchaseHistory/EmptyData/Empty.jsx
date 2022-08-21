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
        No Data
      </span>
    }
  >
  </Empty>
        </div>
    )
}