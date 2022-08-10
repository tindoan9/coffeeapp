import { PRODUCT_LIMIT } from '../stores/slices/product.slice'
import {API, URL_API} from './const.api'

export const ProductAPI = {
	fetchProduct: (page, limit) => {
		const queryParam = `?_page=${page}&_limit=${limit}`
		return API.get(`${URL_API}/products${queryParam}`)
	},
	fetchCategory: () => API.get(`${URL_API}/products`),
	searchProductList: (text) => API.get(`${URL_API}/products?q=${text}`),
	addProduct: (data) => API.post(`${URL_API}/products`,data),
  	updateProduct: (id, data) => API.patch(`${URL_API}/products`, id, data),
  	deleteProduct: (id) => API.delete(`${URL_API}/products`, id)
}