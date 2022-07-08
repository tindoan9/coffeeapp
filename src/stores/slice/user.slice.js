import { createSlice } from "@reduxjs/toolkit"

const USER_INFO_KEY = 'USER_INFO';

const initialState = {
    userInfoState: {
        data: JSON.parse(localStorage.getItem(USER_INFO_KEY)) || {},
        loading: false,
        error: null,
    },
}

const appSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginAction(state, action) {
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: true
            }
        },
        loginActionSuccess(state, action) {
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(action.payload.userInfo))
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: action.payload.userInfo
            }
        },
        loginActionFailed(state, action) {
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: action.payload.error
            }
        },
        registerAction(state, action) {
            
        },
        registerActionSuccess(state, action) {
        },
        registerActionFailed(state, action) {
        },
        logoutAction(state, action) {
            localStorage.removeItem(USER_INFO_KEY);
        },
        logoutActionSuccess(state, action) {
        },
        logoutActionFailed(state, action) {
        },
    },
})

export const { 
    loginAction, loginActionSuccess, loginActionFailed, 
    registerAction, registerActionSuccess, registerActionFailed,
    logoutAction, logoutActionSuccess, logoutActionFailed,
} = appSlice.actions
export const userReducer = appSlice.reducer