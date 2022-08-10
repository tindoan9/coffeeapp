import {API, URL_API} from './const.api'

export const CartAPI = {
	fetchOrder: () => API.get(`${URL_API}/order`),
	onlPayment: (data) => API.post(`${URL_API}/order`, data),
	cancelOrder: (id, data) => API.patch(`${URL_API}/order`, `${id}`, data)
}