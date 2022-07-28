import { all, fork } from 'redux-saga/effects';
import { cartSaga } from './cart.saga';
import { productSaga } from './product.saga';
import { userSaga } from './user.saga';


export function* mySaga() {
    yield all([
        fork(userSaga),
        fork(productSaga),
        fork(cartSaga)
    ]);
}