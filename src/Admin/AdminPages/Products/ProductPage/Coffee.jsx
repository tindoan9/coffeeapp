import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, fetchProductAction, PRODUCT_LIMIT } from "../../../../store/slices/product.slice";
import { Pagination } from "antd";

function Coffee() {
    const listProduct = useSelector(state => state.product.productState);
    
    const [showDetail, setShowDetail] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductAction({page:1, limit: 200}));
    },[])

    const handleDetailItem = (e) => {
        setDetailItem(e);
        console.log("detail",detailItem)
        setShowDetail(!showDetail);
    }

    const handleDeleteDetailItem = () =>{
        setShowDetail(!showDetail);
        setDetailItem({});
    }

    const handleDeleteProduct = () => {
        dispatch(deleteProductAction(detailItem));
        setShowDetail(!showDetail)
       
    }
    const navigate = useNavigate();
    const gotoDetail = (item) => {
        navigate(`/edit/${item.id}`, {state: {...item}});
        setDetailItem({})

    }
    
    return (
        <div>
            <div>
                <>
                    {listProduct.data.map((item, index) => {
                        if(item.type === 'coffee')
                        return (
                            <>
                                <div className="product-item" key={index} onClick={() => handleDetailItem(item)}>
                                    <img src={item.link} alt={item.name} /><br />
                                    <p>{item.name}</p>
                                    <p>{item.price}đ</p>
                                </div>

                            </>

                        )
                    })}
                </>
                <>
                    {showDetail && <div className="detail-item">
                        <img src={detailItem?.link} alt="" />
                        <div className="detail-infor">
                            <p className="back" onClick={handleDeleteDetailItem}>X</p>
                            <h3 className="name-detail">{detailItem?.name}</h3>
                            <h3 className="price-detail">{detailItem?.price}đ</h3>
                            <p className="des-detail">{detailItem?.description}</p>
                            <button onClick={handleDeleteProduct}>Delete</button><br></br>
                            <button onClick={() => gotoDetail(detailItem)}>Edit</button>
                        </div>
                    </div>}
                </>
            </div>
           
            
        </div>
    );
}

export default Coffee;