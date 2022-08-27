import {API, URL_API} from './const.api'

export const UserAPI = {
	getUser: () => API.get(`${URL_API}/users`),
	updateUser: (data, id) => API.patch(`${URL_API}/users`, id, data)
}