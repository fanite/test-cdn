import {lazyLoadVue as lazyLoad} from '@/libs/utils'
const admin = [
  {
    name: 'Admin',
    path: '/admin',
    component: lazyLoad('views/admin/layouts/Layout'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'users',
        name: 'AdminUsers',
        component: lazyLoad('views/admin/users/Lists')
      },
      {
        path: 'users/teams',
        name: 'AdminUsersTeams',
        meta: { requiresAuth: false },
        component: lazyLoad('views/admin/users/Teams')
      }
    ]
  }
]
export default admin
