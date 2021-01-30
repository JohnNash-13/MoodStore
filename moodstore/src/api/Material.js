import axios from 'axios'
import { paramsFormat } from '../utils/ParamsWrapper.js'
function getMaterial(type, offset, count, accessToken) {
	return axios.get('http://ricky.vaiwan.com/material/' + paramsFormat([type, offset, count, accessToken]), null)
}

export {
	getMaterial
}