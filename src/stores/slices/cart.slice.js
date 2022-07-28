import { createSlice } from "@reduxjs/toolkit";
import { notification } from 'antd';

export const ORDER_LIMIT = 7;

const initialState = {
	cartState: {
		cancelled: '',
		bill: [],
		cart: [],
		data: [],
		totalBill: 0,
		cartItem: 0,
		loading: false,
		error: null,
		pagination: {
		    page: 1,
		    limit: ORDER_LIMIT,
		    total: null,
            totalPage: null
	    }
	}
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCartAction: (state, action) => {
			const cartItem = {...action.payload}
			state.cartState.cart.push(cartItem)
		},
		removeCartAction: (state, action) => {
			const listCartItem = state.cartState.cart
			const remove = listCartItem.splice(action.payload, 1)
			state.cartState = {
				...state.cartState,
				cart: remove
			}
		}, 
		getTotalBill: (state, action) => {
			const totalBill = state?.cartState?.cart?.reduce?.((cartTotal, cartItem) => cartTotal += cartItem.total, 0)
			state.cartState.totalBill = totalBill
		},
		getTotalItem: (state, action) => {
			const cartItem = state?.cartState?.cart?.reduce?.((cartTotal, cartItem) => cartTotal += cartItem.count, 0)
			state.cartState.cartItem = cartItem
		},
		deleteCartItemAction: (state, action) => {
			const idCartItem = action.payload
			const deleteCart = state.cartState.cart.filter(item => item.id !== idCartItem)
			state.cartState.cart = deleteCart
		},
		paymentAction: (state, action) => {
			state.cartState = {
				...state.cartState,
				loading: true
			}
		},
		paymentActionSuccess: (state, action) => {
			notification.success({
                message: `Đặt hàng thành công!`,
            });
            const infoBill = action.payload
            state.cartState = {
                ...state.cartState,
                bill: infoBill,
                loading: false,
                error: null
            }
		},
		paymentActionFailed: (state, action) => {
			notification.error({
                message: `Payment failed: ${action.payload}`,
            });
            state.cartState = {
                ...state.cartState,
                loading: false,
                error: action.payload.error
            }
		},
		fetchOrderAction: (state, action) => {
            const page = action.payload
            state.cartState = {
                ...state.cartState,
                loading: true,
                pagination: {
                    ...state.cartState.pagination,
                    page: page
                }
            }
		},
        fetchOrderActionSuccess: (state, action) => {
            const {data, totalOrder} = action.payload
            state.cartState = {
                ...state.cartState,
                data,
                loading: false,
                pagination: {
                    ...state.cartState.pagination,
                    total: +totalOrder,
                    totalPage: totalOrder / ORDER_LIMIT
                }
            }
		},
        fetchOrderActionError: (state, action) => {
            notification.error(action.payload)
		},
		cancelOrderAction: (state, action) => {
			const statusCancel = action.payload
			state.cartState = {
				...state.cartState,
                cancelled: statusCancel,
				loading: true
			}
		},
		cancelOrderSuccessAction: (state, action) => {
			notification.success({
                message: `Bạn đã hủy đơn hàng!`,
            });
			const statusCancel = action.payload
            state.cartState = {
                ...state.cartState,
                cancelled: statusCancel,
                loading: false,
                error: null
            }
		},
		cancelOrderFailedAction: (state, action) => {
			notification.error(action.payload)
			state.cartState = {
                ...state.cartState,
                loading: false,
                error: action.payload.error
            }
		}
	}
})

export const {addToCartAction, removeCartAction, getTotalBill, getTotalItem, deleteCartItemAction, paymentAction, paymentActionSuccess, paymentActionFailed, fetchOrderAction, fetchOrderActionSuccess, fetchOrderActionError, cancelOrderAction, cancelOrderSuccessAction, cancelOrderFailedAction} = cartSlice.actions

export const cartReducer = cartSlice.reducer