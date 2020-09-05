import Axios from 'axios'
import Lockr from '../lockr'

const Service = Axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000
})

Service.reloadToken = function () {
  // 尝试获取Access Token
  let accessToken = Lockr.get(Lockr.autodev.ACCESS_TOKEN),
    bearer = Lockr.get(Lockr.autodev.TOKEN_TYPE);

  if (accessToken != 'undefined') {
    Service.defaults.headers.common['Authorization'] = `${bearer} ${accessToken}`;
  }
}

Service.reloadToken()

export default Service