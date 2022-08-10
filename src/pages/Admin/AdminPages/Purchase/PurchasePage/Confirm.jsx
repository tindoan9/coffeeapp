import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ConfirmOrderAction } from "../../../../../stores/slices/admin.cart.slice";
import { fetchOrderAction } from "../../../../../stores/slices/cart.slice";


export function Confirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const orderState = useSelector((state) => state.cart.cartState);
  const data = orderState.data;
  const loading = orderState.loading;
  

  useEffect(() => {
    dispatch(fetchOrderAction())
  }, [dispatch, data]);

  const handleConfirmOrder = (item) => {
      dispatch(ConfirmOrderAction({...item, status:'Đang giao'}));
      navigate(`/admin/purchase/delivering`)
  }
  const handleCancelOrder = (item) => {
      dispatch(ConfirmOrderAction({...item, status:'Đã hủy'}));
      navigate(`/admin/purchase/cancel`)
  }

   
  
  const listTitle = [ 'UserName','Phone', 'Address', 'ListOder','Count','Price','TotalBill','Date', 'Action' ]
  return (
    <div className="confirm">
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
          if(item.status ==='Chờ xác nhận'){          
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
                  <button className="button" onClick={()=> {handleConfirmOrder(item)}} >Confirm</button>
                  <button className="button" onClick={()=> {handleCancelOrder(item)}}>Cancel</button>
                </td>
                
              </tr>
            )
}})
        }
      </>
      
    </div>
  );
}
