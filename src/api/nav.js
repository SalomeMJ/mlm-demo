import request from '@/utils/request'

export function getNav() {
  return request({
    url: '/user/nav',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

