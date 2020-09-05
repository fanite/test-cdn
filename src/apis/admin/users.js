import Http from '@/plugins/axios'

function getCurrentUserInfo() {
  Http.reloadToken();
  return Http({
    url: '/users/present',
    type: 'get'
  })
}

export default {
  getCurrentUserInfo
}