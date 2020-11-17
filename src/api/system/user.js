import request from '@/utils/request'

export function getUser() {
  return request({
    url: '/system/user',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
