import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAction, PRODUCT_LIMIT } from '../../../stores/slices/product.slice';
import { Pagination } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";

export default function ListProduct() {
	const productState = useSelector(state => state.product.productState)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams();

	const total = productState?.pagination?.total
	const loading = productState?.loading

	const defaultPage = 1;

	const _page = searchParams.get("page") ?? `${defaultPage}`;
	const _limit = searchParams.get("limit") ?? `${PRODUCT_LIMIT}`;

	useEffect(() => {
		dispatch(fetchProductAction({ page: _page, limit: _limit }));
	}, [dispatch, _page, _limit]);

	const onPaginationChange = (page, limit) => {
		dispatch(fetchProductAction(page))
		setSearchParams({ page, limit });
	}

	const handleCoffeeDetail = (item) => {
		navigate(`/product-detail/${item.id}`, { state: { ...item } })
	}

	return (
		<>
			<h2 className='title__product'>Sản phẩm</h2>
			<div className='list__product'>
				{productState?.data?.map?.((item, index) => (
					<div onClick={() => handleCoffeeDetail(item)} key={index} className="item">
						<img src={item.image} alt="" />
						<p>{item.productName}</p>
						<span>{item.price}.000đ</span>
						<button>+</button>
					</div>
				))}
			</div>
			<div className="loading">
				{loading && (<LoadingOutlined />)}
			</div>
			<div className="pagination">
				<Pagination onChange={onPaginationChange} pageSize={+_limit} current={+_page} total={total} />
			</div>
		</>
	)
}