import { delay, put, takeEvery } from "redux-saga/effects";
import { CartAPI } from "../../api";
import { ConfirmOrderAction, ConfirmOrderFailded, ConfirmOrderSeccess, fetchOrderAdminAction, fetchOrderAdminError, fetchOrderAdminSuccess } from "../slices/admin.cart.slice";
import { cancelOrderAction, cancelOrderFailedAction, cancelOrderSuccessAction, fetchOrderAction, fetchOrderActionError, fetchOrderActionSuccess, paymentAction, paymentActionFailed, paymentActionSuccess } from "../slices/cart.slice";

function* onlPayment(action){
    try {
        yield delay(500)
        const bill = action.payload
        const response = yield CartAPI.onlPayment({
            id: bill.id,
            userId: bill.userId,
            userName: bill.userName,
            phone: bill.phone,
            address: bill.address,
            totalBill: bill.totalBill,
            status: bill.status,
            date: bill.date,
            listProductOrder: [
                ...bill.listProductOrder
            ]
        })
        yield put(paymentActionSuccess(response.data))
    } catch (e) {
        yield put(paymentActionFailed(e.response.data))
    }
}

function* fetchOrder(action) {
	try {
		const response = yield CartAPI.fetchOrder()
		const productData = response.data
		yield put(fetchOrderActionSuccess({
			data: productData,
		}))
	} catch (error) {
		yield put(fetchOrderActionError(error.response.data))
	}
}

function* fetchOrderAdmin(action) {
	try {
		const response = yield CartAPI.fetchOrder()
		const productData = response.data
		yield put(fetchOrderAdminSuccess({
			data: productData,
		}))
	} catch (error) {
		yield put(fetchOrderAdminError(error.response.data))
	}
}

function* cancelOrder(action) {
    try {
        const cancelledStatus = action.payload
        const response = yield CartAPI.cancelOrder(cancelledStatus.id, {
            status: cancelledStatus.status
        })
        yield put(cancelOrderSuccessAction(response.data))
    } catch (e) {
        yield put(cancelOrderFailedAction(e.response.data))
    }
}

function* StatusOrder(action) {
    try {
        yield delay(500);
        const ItemOrder = action.payload
        const response = yield CartAPI.cancelOrder(ItemOrder.id, {status: ItemOrder.status});        
        
        yield put(ConfirmOrderSeccess(response.data))
        
    } catch (e) {
        yield put(ConfirmOrderFailded(e.response.data))
    }
}

export function* cartSaga(){
    yield takeEvery(paymentAction, onlPayment)
    yield takeEvery(fetchOrderAction, fetchOrder)
    yield takeEvery(fetchOrderAdminAction, fetchOrderAdmin)
    yield takeEvery(ConfirmOrderAction, StatusOrder)
    yield takeEvery(cancelOrderAction, cancelOrder)
}