import axios from 'axios'
function getAccessToken(){
	return axios.get('http://ricky.vaiwan.com/token', null)
}
export {
	getAccessToken
}