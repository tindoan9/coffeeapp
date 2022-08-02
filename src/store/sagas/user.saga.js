import {put,takeEvery} from 'redux-saga/effects'
import { loginAction, 
    loginActionFailed, 
    loginActionSuccess, 
    logoutAction, 
    logoutActionFailed, 
    logoutActionSuccess, 
    registerAction, 
    registerActionSuccess, 
} from '../slices/user.slice';
import { AuthAPI } from '../../api';

function* login(action) {
    console.log('abc')
    try {
        const {
            loginPayload
        } = action.payload
        const response = yield AuthAPI.login(loginPayload);
        yield put(loginActionSuccess(response));
    } catch (e) {
        yield put(loginActionFailed(e.message));
    }
}

function* logout() {
    try {
        yield put(logoutActionSuccess());
    } catch (e) {
        yield put(logoutActionFailed());
    }
}

function* register(action) {
    try {
        const {
            registerPayload
        } = action.payload;
        const response = yield AuthAPI.register(registerPayload);
        yield put(registerActionSuccess(response));
    } catch (e) {
        yield put(registerActionSuccess(e));
    }
}

export function* userSaga() {
    yield takeEvery(loginAction, login);
    yield takeEvery(registerAction, register);
    yield takeEvery(logoutAction, logout);
}