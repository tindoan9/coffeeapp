import { createSlice } from '@reduxjs/toolkit'

const USER_INFO_KEY = 'USER_INFO';

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY) ? JSON.parse(localStorage.getItem(USER_INFO_KEY)) : null;

const initialState = {
    userInfoState: {
        data: userInfoFromStorage,
        loading: false,
        error: null,
    },
}

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
            const userInfoResponse = {...action.payload};
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse))
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: userInfoResponse
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
        // registerAction(state, action) {
            
        // },
        // registerActionSuccess(state, action) {
        // },
        // registerActionFailed(state, action) {
        // },
        logoutAction(state, action) {
            console.log('logout')
            localStorage.removeItem(USER_INFO_KEY);
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: null
            }
        },
        // logoutActionSuccess(state, action) {
        // },
        // logoutActionFailed(state, action) {
        // },
    },
})

export const { 
    loginAction, loginActionSuccess, loginActionFailed, 
    // registerAction, registerActionSuccess, registerActionFailed,
    logoutAction,
} = userSlice.actions
export const userReducer = userSlice.reducer