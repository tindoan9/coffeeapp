// Lưu tất cả những global state (redux, ...)import { configureStore } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./sagas";
import { cartReducer } from "./slices/cart.slice";
import { productReducer } from "./slices/product.slice";
import { userReducer } from "./slices/user.slice";

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ];

const rootReducer = {
    user: userReducer,
    product: productReducer,
    cart: cartReducer
}

export const appStore = configureStore({
    reducer: rootReducer,
    // Value nhận vào là list các middleware
    // getDefaultMiddleware để ta trả về các middleware sẵn có trong redux
    // và nối với middleware vừa tạo là saga-middleware
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

sagaMiddleware.run(mySaga);

