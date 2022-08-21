import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ConfirmOrderAction, fetchOrderAdminAction } from "../../../../../stores/slices/admin.cart.slice";
import { notification } from "antd";


export function Delivering() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.adminCart.cartState);
  const data = orderState.data;
  const loading = orderState.loading;

  const status = orderState.status

  useEffect(() => {
    dispatch(fetchOrderAdminAction())
  }, [dispatch, status]);

  const handleDeliveredOrder = (item) => {
    dispatch(ConfirmOrderAction({...item, status:'Đã nhận'}));
    notification.success({
      message:`Đã nhận đơn hàng!`
  })
}
const handleCancelOrder = (item) => {
    dispatch(ConfirmOrderAction({...item, status:'Đã hủy'}));
    notification.success({
      message:`Đã hủy đơn hàng!`
  })
}


  
  const listTitle = [ 'UserName','Phone', 'Address', 'ListOder','Count','Price','TotalBill','Date', 'Action' ]
  return (
    <div className="delivered">
        {loading && <div style={{textAlign:'center'}}><LoadingOutlined /></div>}
      <tr className="confirm-title">
        {listTitle.map(title => {
          return(
            <td style={{fontWeight:"bold", fontSize:"18px"}}> 
              {title}
            </td>
          )
        })} 
      </tr>
      <>
        {data.map((item, index) => {
          if(item.status ==='Đang giao'){          
            return (
              <tr className="confirm-title">
                <td style={{fontWeight:'bold'}}>{item.userName}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  {item.listProductOrder.map((e) => {
                    return(
                      <>
                      <p>{e.productName}</p>
                      </>
                    )
                  })}
                </td>
                <td>
                  {item.listProductOrder.map((e) => {
                    return(
                      <>
                      <p>{e.count}</p>
                      </>
                    )
                  })}
                </td>
                <td>
                  {item.listProductOrder.map((e) => {
                    return(
                      <>
                      <p>{e.total}.000đ</p>
                      </>
                    )
                  })}
                </td>
                <td>{item.totalBill}.000đ</td>
                <td>{item.date}</td>
                <td>
                <button className="button" onClick={() => {handleDeliveredOrder(item)}}>Delivered</button>
                  <button className="button" onClick={() => {handleCancelOrder(item)}}>Cancel</button>
                </td>
                
              </tr>
            )
}})
        }
      </>
      
    </div>
  );
}
