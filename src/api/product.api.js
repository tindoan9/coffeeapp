import { PRODUCT_LIMIT } from "../store/slices/product.slice";
import { API, URL_API } from "./const.api";

export const ProductAPI = {
  fetchProduct: (page, limit) => {
    const queryParam = `?_page=${page}&_limit=${limit}`;

    return API.get(`${URL_API}/products${queryParam}`);
      
  },
  addProduct: (data) => API.post(`${URL_API}/products`,data),
  updateProduct: (id, data) => API.patch(`${URL_API}/products`, id, data),
  deleteProduct: (id) => API.delete(`${URL_API}/products`, id)
};
