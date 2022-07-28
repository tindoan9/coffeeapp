import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd';

const USER_INFO_KEY = 'USER_INFO';

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY) ? JSON.parse(localStorage.getItem(USER_INFO_KEY)) : null;

const initialState = {
    userInfoState: {
        data: userInfoFromStorage,
        createAccount: [],
        loading: false,
        error: null
    },
}

export const USER_ID = userInfoFromStorage

const userSlice = createSlice({
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
            notification.success({
                message: `Đăng nhập thành công!`,
            });
            const userInfoResponse = action.payload
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse))
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: userInfoResponse
            }
        },
        loginActionFailed(state, action) {
            notification.error({
                message: `Login Failed: ${action.payload}`,
            });
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: action.payload.error
            }
        },
        registerAction(state, action) {
            state.userInfoState = {
                ...state.userInfoState,
                loading: true,
            }
        },
        registerActionSuccess(state, action) {
            notification.success({
                message: `Đăng ký thành công!`,
            });
            const userInfoResponse = action.payload;
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                createAccount: userInfoResponse,
                error: null
            }
        },
        registerActionFailed(state, action) {
            notification.error({
                message: `Email đã tồn tại`,
            });
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: action.payload
            }
        },
        logoutAction(state, action) {
            notification.success({
                message: `Đăng xuất thành công!`,
            });
            localStorage.removeItem(USER_INFO_KEY);
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: null
            }
        },
        updateUserInfoAction(state, action) {
            const userInfoUpdate = {...action.payload}
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoUpdate))
            state.userInfoState = {
                ...state.userInfoState,
                loading: true
            }
        },
        updateUserInfoActionSuccess(state, action) {
            notification.success({
                message: `Cập nhật thành công!`,
            });
            const userInfoUpdate = {...action.payload}           
            state.userInfoState = {
                ...state.userInfoState,
                data: userInfoUpdate,
                loading: false
            }
        },
        updateUserInfoActionFailed(state, action) {
            notification.error({
                message: `Update Failed: ${action.payload}`,
            });
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: action.payload.error
            }
        }
    },
})

export const { 
    loginAction, loginActionSuccess, loginActionFailed, 
    registerAction, registerActionSuccess, registerActionFailed,
    logoutAction, updateUserInfoAction, updateUserInfoActionSuccess, updateUserInfoActionFailed
} = userSlice.actions
export const userReducer = userSlice.reducer