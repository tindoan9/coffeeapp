import { USER_ID } from '../stores/slices/user.slice'
import {API, URL_API} from './const.api'

export const UserAPI = {
	getUser: (url) => API.get(`${URL_API}/users`),
	updateUser: (data) => API.patch(`${URL_API}/users`, `${USER_ID.id}`, data)
}