import { createSlice } from '@reduxjs/toolkit'
import { notification } from "antd";

export const PRODUCT_LIMIT = 10;

const initialState = {
    productState: {
        data: [],
        category: [],
        loading: false,
        error: null,
        search: [],
	    pagination: {
		    page: 1,
		    limit: PRODUCT_LIMIT,
		    total: null,
            totalPage: null
	    }
	},
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		fetchProductAction: (state, action) => {
            const page = action.payload
            state.productState = {
                ...state.productState,
                loading: true,
                pagination: {
                    ...state.productState.pagination,
                    page: page
                }
            }
		},
        fetchProductActionSuccess: (state, action) => {
            const {data, totalProduct} = action.payload
            state.productState = {
                ...state.productState,
                data,
                loading: false,
                pagination: {
                    ...state.productState.pagination,
                    total: +totalProduct,
                    totalPage: totalProduct / PRODUCT_LIMIT
                }
            }
		},
        fetchProductActionError: (state, action) => {
            notification.error(action.payload)
		},
		
        searchProductAction: (state, action) => {
            const search = action.payload
            state.productState = {
                ...state.productState,
                search:search,
                loading: true
            }
        },
        searchProductActionSuccess: (state, action) => {
            const {search} = action.payload
            state.productState = {
                ...state.productState,
                search,
                loading: false
            }
        },
        searchProductActionFailed: (state, action) => {
            notification.error(action.payload)
        },
        fetchCategoryAction: (state, action) => {
            state.productState = {
                ...state.cartState,
                loading: true,
            }
		},
        fetchCategoryActionSuccess: (state, action) => {
            const {category} = action.payload
            state.productState = {
                ...state.cartState,
                category: category,
                loading: false,
            }
		},
        fetchCategoryActionError: (state, action) => {
            notification.error(action.payload)
		}
	}
})

export const {fetchProductAction, fetchProductActionSuccess, fetchProductActionError, getProductList, searchProductAction, searchProductActionSuccess, searchProductActionFailed, fetchCategoryAction, fetchCategoryActionSuccess, fetchCategoryActionError} = productSlice.actions
export const productReducer = productSlice.reducer