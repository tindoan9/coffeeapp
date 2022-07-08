import {
    put,
    takeEvery
} from 'redux-saga/effects'
import { loginAction, 
    loginActionFailed, 
    loginActionSuccess, 
    logoutAction, 
    // logoutActionFailed, 
    // logoutActionSuccess, 
    // registerAction, 
    // registerActionSuccess, 
} from '../slices/user.slice.js';
import { AuthAPI } from '../../api';

function* login(action) {
    try {
        const loginPayload = action.payload
        console.log(action.payload);
        const response = yield AuthAPI.login({
            email: loginPayload.username,
            password: loginPayload.password,
        });
        console.log(response.data.user);
        yield put(loginActionSuccess(response.data.user));
    } catch (e) {
        yield put(loginActionFailed(e.message));
    }
}

export function* userSaga() {
    yield takeEvery(loginAction, login);
}