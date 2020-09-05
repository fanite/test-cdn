import Http from '@/plugins/axios'

export function fetchRoutes (data) {
  return Http({
    url: '/routes',
    method: 'get',
    data
  })
}