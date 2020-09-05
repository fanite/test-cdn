import Mock from "mockjs"
import Crypto from 'crypto'

Mock.setup({
  timeout: "400-800",
});

Mock.mock('/admin/users', 'get', {
  'data|10': [{
    'id|+1': 1,
    'username': /(301|100|101|302)0{3}\d{3}/,
    'password': function () {
      const hash = Crypto.createHash('sha256');
      hash.update(Mock.Random.string());
      return hash.digest('hex')
    },
    'fullname': '@cname',
    'email': '@EMAIL',
    'teamId': '@integer(1,5)',
    'key': /([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$/
  }],
  'page|+1': 1,
  'total': 1000

})

Mock.mock(RegExp('/routes' + ".*"), 'get', {
  'data': [
    {
      id: 1,
      name: 'AdminUserLists',
      path: 'users',
      alias: null,
      redirect: null,
      component: 'admin/users/Lists',
      application: 'admin',
      disabled: 0
    },
    {
      id: 1,
      name: 'AdminUserTeams',
      path: 'users/teams',
      alias: null,
      redirect: null,
      component: 'admin/users/Teams',
      application: 'admin',
      disabled: 0
    }
  ],
})

export default Mock