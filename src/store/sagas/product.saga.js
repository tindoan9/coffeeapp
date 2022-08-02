import { put, takeEvery, delay } from "redux-saga/effects";
import { ProductAPI } from "../../api/product.api.js";
import {
  fetchProductAction,
  fetchProductActionFailed,
  fetchProductActionSuccess,
  addProductItem,
  addProductSuccess,
  addProductFailed,
  updateProductAction,
  updateProductSuccess,
  updateProductFailed,
  deleteProductAction,
  deleteProductSuccess,
  deleteProductFailed
} from "../slices/product.slice.js";


function* fetchProduct(action) {

  try {
    yield delay(100);
    const {page, limit} = action.payload
    const responseApi = yield ProductAPI.fetchProduct(page, limit);
    
    
    const productData = responseApi.data;
    console.log("🚀 ~ file: product.saga.js ~ line 28 ~ function*fetchProduct ~ productData", productData)
    const totalProduct = responseApi.headers["x-total-count"];

    // Put 1 action đã được định nghĩa ở slice
    yield put(
      fetchProductActionSuccess({
        data: productData,
        totalProduct: totalProduct,
      })
    );
    // const proPayload = action.payload;
  
    // const response = yield ProductAPI.fetchProduct({
    //   data: proPayload.data,
    //   totalProduct: proPayload.headers["x-total-count"]
    // })
    // console.log(response)
    // yield put(fetchProductActionSuccess(response.data.products))
  } catch (e) {

    // Put 1 action đã được định nghĩa ở slice
    yield put(fetchProductActionFailed(e.responseApi.data));
    
  }
}

function* addProductItems(action) {
  try{
    const productItem = action.payload
    const response = yield ProductAPI.addProduct(
      productItem
      );
    // Put 1 action đã được định nghĩa ở slice
    yield put(addProductSuccess(response) );
  }catch (e) {
    yield put(addProductFailed(e));
  }

  }

function* updateProductItems(action) {
  try{
    const productUpdate =action.payload;
    const responseUpdate = yield ProductAPI.updateProduct(productUpdate.id, productUpdate);
    yield put(updateProductSuccess(responseUpdate.data));
  }
  catch(e) {
    yield put(updateProductFailed(e))
  }
}

function* deleteProductItems(action) {
  try{
    const productDelete =action.payload;
    const responseUpdate = yield ProductAPI.deleteProduct(productDelete.id);
    yield put(deleteProductSuccess(productDelete));
  }
  catch(e) {
    yield put(updateProductFailed(e))
  }
}


export function* productSaga() {
  yield takeEvery(fetchProductAction, fetchProduct);
  yield takeEvery(addProductItem, addProductItems);
  // yield takeEvery(addProductSuccess,fetchProduct)
  yield takeEvery(updateProductAction,updateProductItems);
  yield takeEvery(deleteProductAction,deleteProductItems);
}
