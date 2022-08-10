import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ConfirmOrderAction } from "../../../../../stores/slices/admin.cart.slice";
import { fetchOrderAction } from "../../../../../stores/slices/cart.slice";
import { useNavigate } from "react-router-dom";


export function Delivering() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const orderState = useSelector((state) => state.cart.cartState);
  const data = orderState.data;
  const loading = orderState.loading;

  useEffect(() => {
    dispatch(fetchOrderAction())
  }, [dispatch]);

  const handleDeliveredOrder = (item) => {
    dispatch(ConfirmOrderAction({...item, status:'Đã nhận'}));
    navigate(`/admin/purchase/delivered`)
}
const handleCancelOrder = (item) => {
    dispatch(ConfirmOrderAction({...item, status:'Đã hủy'}));
    navigate(`/admin/purchase/cancel`)
}


  
  const listTitle = [ 'UserName','Phone', 'Address', 'ListOder','Count','Total','TotalBill','Date', 'Action' ]
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
                <td>{item.totalBill}</td>
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
