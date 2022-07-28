import { delay, put, takeEvery } from "redux-saga/effects";
import { ProductAPI } from "../../api";
import { fetchProductAction, fetchProductActionError, fetchProductActionSuccess, searchProductAction, searchProductActionFailed, searchProductActionSuccess } from "../slices/product.slice";

function* fetchProduct(action) {
	try {
		yield delay(500)
		const { page, limit } = action.payload;
		const response = yield ProductAPI.fetchProduct(page)
		const productData = response.data
		const totalProduct = response.headers['x-total-count']

		yield put(fetchProductActionSuccess({
			data: productData,
			totalProduct: totalProduct
		}))
	} catch (error) {
		yield put(fetchProductActionError(error.response.data))
	}
}

function* searchProduct(action){
	try {
		const response = yield ProductAPI.searchProductList(action.payload)
		const productData = response.data
		yield put(searchProductActionSuccess({
			search: productData
		}))
	} catch (error) {
		yield put(searchProductActionFailed(error.response.data))
	}
}

export function* productSaga() {
	yield takeEvery(searchProductAction, searchProduct)
	yield takeEvery(fetchProductAction, fetchProduct)
}