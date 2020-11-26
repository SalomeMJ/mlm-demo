import request from '@/utils/request'

export function getRoot() {
  return request({
    url: '/system/root',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
