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
        yield delay(2000)
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
        yield delay(2000)
        const registerPayload = action.payload
        const response = yield AuthAPI.register({
            email: registerPayload.values.email,
            password: registerPayload.values.password,
            decentralization: registerPayload.decentralization
        });
        yield put(registerActionSuccess(response.data.user));
    } catch (e) {
        yield put(registerActionFailed(e.response));
    }
}

function* updateUser(action) {
    try {
        yield delay(500)
        const updateUserInfo = action.payload
        const response = yield UserAPI.updateUser({
            name: updateUserInfo.values.name,
            email: updateUserInfo.values.email,
            phone: updateUserInfo.values.phone,
            address: updateUserInfo.values.address,
            decentralization: updateUserInfo.decentralization
        }, updateUserInfo.userID)
        yield put(updateUserInfoActionSuccess(response.data))
    } catch (error) {
        yield put(updateUserInfoActionFailed(error.response))
    }
}

export function* userSaga() {
    yield takeEvery(registerAction, register);
    yield takeEvery(loginAction, login);
    yield takeEvery(updateUserInfoAction, updateUser)
}