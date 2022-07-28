import {
    delay,
    put,
    takeEvery
} from 'redux-saga/effects'
import { loginAction, 
    loginActionFailed, 
    loginActionSuccess,
    registerAction,
    registerActionFailed,
    registerActionSuccess,
    updateUserInfoAction,
    updateUserInfoActionFailed,
    updateUserInfoActionSuccess
} from '../slices/user.slice.js';
import { AuthAPI, UserAPI } from '../../api';

function* login(action) {
    try {
        const loginPayload = action.payload
        const response = yield AuthAPI.login({
            email: loginPayload.email,
            password: loginPayload.password,
        });
        yield put(loginActionSuccess(response.data.user));
    } catch (e) {
        yield put(loginActionFailed(e.response.data));
    }
}

function* register(action) {
    try {
        const registerPayload = action.payload
        const response = yield AuthAPI.register({
            email: registerPayload.email,
            password: registerPayload.password,
        });
        yield put(registerActionSuccess(response.data.user));
    } catch (e) {
        yield put(registerActionFailed(e.response.data));
    }
}

function* updateUser(action) {
    try {
        yield delay(500)
        const updateUserInfo = action.payload
        const response = yield UserAPI.updateUser({
            name: updateUserInfo.name,
            phone: updateUserInfo.phone,
            address: updateUserInfo.address
        })
        yield put(updateUserInfoActionSuccess(response.data.user))
    } catch (error) {
        yield put(updateUserInfoActionFailed(error.response))
    }
}

export function* userSaga() {
    yield takeEvery(registerAction, register);
    yield takeEvery(loginAction, login);
    yield takeEvery(updateUserInfoAction, updateUser)
}