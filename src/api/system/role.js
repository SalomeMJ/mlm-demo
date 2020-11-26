import request from '@/utils/request'

export function getRole() {
  return request({
    url: '/system/role',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
