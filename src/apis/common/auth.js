import Http from '@/plugins/axios'

function login (data) {
  return Http({
    url: '/auth/login',
    method: 'post',
    data
  })
}

function logout() {
  return Http({
    url: '/auth/logout',
    method: 'delete'
  })
}

function test() {
  return Http({
    url: '/admin/users',
    method: 'post'
  })
}

export default {
  login,
  logout,
  test
}