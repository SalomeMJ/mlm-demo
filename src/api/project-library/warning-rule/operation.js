import request from '@/utils/request'

export function getOperation() {
  return request({
    url: '/operation',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

