import { notification } from "antd"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cartState:{
        data: [],
        Cancel:"",
        loading:false,
        error:null
    }
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        fetchOderAction:(state, action) => {
            state.cartState = {...state.cartState,
            loading:true}
        },

        fetchOderSeccess:(state, action) => {
            const data = action.payload
            console.log("🚀 ~ file: admin.cart.slice.js ~ line 25 ~ data", data)
            state.cartState = {
                ...state.cartState,
                data,
                loading:false,
            }
        },
        fetchOderFailed: (state, action) =>{
            notification.error(action.payload)
        },
        ConfirmOrderAction:(state, action) => {
            state.cartState = {...state.cartState,
                loading:true}
        },
        ConfirmOrderSeccess:(state, action) => {
            state.cartState = {
                ...state.cartState,
                Cancel: action.payload,
                loading:false,
            }
        },
        ConfirmOrderFailded:(state, action) => {
            notification.error(action.payload)
        },
        
    }
})

export const {fetchOderAction,fetchOderSeccess,fetchOderFailed,ConfirmOrderAction,ConfirmOrderSeccess,ConfirmOrderFailded} =  cartSlice.actions;

export const adminCartReducer = cartSlice.reducer;