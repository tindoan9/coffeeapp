import React, { useEffect, useState } from "react";
import './style.css';
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { deleteProductAction, fetchProductAction, PRODUCT_LIMIT } from "../../../../../stores/slices/admin.product.slice";
import { message, notification, Pagination } from "antd";

function AllProducts() {
    const listProduct = useSelector(state => state.adminProduct.productState)
    let [searchParams, setSearchParams] = useSearchParams();
    const [showDetail, setShowDetail] = useState(false);
    const [detailItem, setDetailItem] = useState(null);
    const dispatch = useDispatch();
    const data =listProduct.data;
    const defaultPage = 1;
    const _page = searchParams.get('page') ?? `${defaultPage}`;
    const _limit = searchParams.get('limit') ?? `${PRODUCT_LIMIT}`;

    const page = listProduct.pagination.page;
    const total = listProduct.pagination.total;
    const loading = listProduct.loading;

    useEffect(() => {
        dispatch(fetchProductAction({ page: _page ? _page : 1, limit: _limit }));
    }, [dispatch, _page, _limit, total])


    const handleDetailItem = (product) => {
        setDetailItem(product);
        console.log("detail", detailItem)
        setShowDetail(!showDetail);
    }

    const handleDeleteDetailItem = () => {
        setShowDetail(!showDetail);
    }

    const handleDeleteProduct = () => {
        dispatch(deleteProductAction(detailItem.id));
        setShowDetail(!showDetail)
        notification.success({
            message: 'Xóa thành công!'
        })
    }
    const navigate = useNavigate();
    const gotoDetail = (item) => {
        navigate(`/admin/edit/${item.id}`, { state: { ...item } });

    }
    const onchangePagination = (page, limit) => {
        setSearchParams({ page, limit })
        
    }
    return (
        <div className="all-product">
            <div >
                
                <>

                {loading && <div style={{textAlign:'center'}}><LoadingOutlined /></div>}
                    {listProduct?.data?.map?.((item) => {
                        return (
                            <div >
                                <div className="product-item" key={item.productName} onClick={() => handleDetailItem(item)}>
                                    <img src={item.image} alt={item.productName} /><br />
                                    <p>{item.productName}</p>
                                    <p>{item.price}.000đ</p>
                                </div>

                            </div>

                        )
                    })}
                </>
                <>
                    {showDetail && <div className="detail-item">
                        <img src={detailItem?.image} alt="" />
                        <div className="detail-infor">
                            <p className="back" onClick={handleDeleteDetailItem}>X</p>
                            <h3 className="name-detail">{detailItem?.productName}</h3>
                            <h3 className="price-detail">{detailItem?.price}.000đ</h3>
                            <p className="des-detail">{detailItem?.description}</p>
                            <button onClick={handleDeleteProduct}>Delete</button><br></br>
                            <button onClick={() => gotoDetail(detailItem)}>Edit</button>
                        </div>
                    </div>}
                </>
            </div>
            <div className="pagination" style={{ marginLeft: '35%' }}>
                <Pagination
                    showSizeChanger
                    pageSize={+ _limit}
                    total={total}
                    current={+ _page}
                    onChange={onchangePagination}
                />
            </div>
        </div>
    );
}

export default AllProducts;