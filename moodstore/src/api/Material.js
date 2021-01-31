import axios from 'axios'
import { paramsFormat } from '../utils/ParamsWrapper.js'
function getMaterial(type, offset, count) {
	return axios.get('http://ricky.vaiwan.com/material/' + paramsFormat([type, offset, count]), null)
}

function queryVideo (media_id) {
	return axios.get('http://ricky.vaiwan.com/material/search/' + paramsFormat([media_id]), null)
}

export {
	getMaterial,
	queryVideo
}