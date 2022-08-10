import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderAction } from "../../../../../stores/slices/cart.slice";
import {FiLogOut,} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function TurnoverSearch() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amoutCoffee, setAmountCoffee] = useState();
    const [totalCofee, setTotalCoffee] = useState();
    const [amoutOther_, setAmountOther] = useState();
    const [totalOther, setTotalOther] = useState();
    const listOrder = useSelector(state => state.cart.cartState)
    const [dayInput, setDateInput] = useState();
    const onchangeDate = (e) => {
        setDateInput(e.target.value)
    }
    let amount_coffee = 0;
    let total_coffee = 0;
    let amount_other = 0;
    let total_other = 0;
    const handleSearchDate = () => {
        listOrder.data.map(item => {
            const lengh = `${item.date}`                   
            if(item.date.substring(lengh.length -4) === dayInput && item.status === 'Đã nhận') {
                item.listProductOrder.map(element => {  
                             
                    if(element.type === 'coffee'){
                        amount_coffee +=  +element.count;
                        setAmountCoffee(amount_coffee)
                        total_coffee += +element.total;
                        setTotalCoffee(total_coffee)
                    }
                     if (element.type === 'other') {
                        amount_other +=   +element.count; 
                        setAmountOther(amount_other)            
                        total_other += +element.total;
                        setTotalOther(total_other)
                    }
                    return amount_other
                })                                                                                                    
            }
        })
        dispatch(fetchOrderAction())
    }
   
    return(
        <div className="turnover">
            <div className="search-date">
                <input type="text" name="date" className="date" value = {dayInput} onChange = {onchangeDate}
                placeholder = 'yyyy'
                ></input>
                <button onClick={handleSearchDate}>Tìm Kiếm</button>
            </div>
            <div>
                <div className="turnover-title">
                    <p>Type Product</p>
                    <p>Amount</p>
                    <p>Total</p>
                </div>               
                <div className="turnover-type">
                    <p>Coffee</p>
                    <p>{amoutCoffee}</p>
                    <p>{totalCofee}.000đ</p>
                </div>
                <div className="turnover-type">
                    <p>Other</p>
                    <p>{amoutOther_}</p>
                    <p>{totalOther}.000đ</p>
                </div>
            </div>
            <div className='logout-turnover' onClick={() => navigate(`/`)}>
                 <FiLogOut />Logout
            </div>       
        </div>
    )
}
export default TurnoverSearch;