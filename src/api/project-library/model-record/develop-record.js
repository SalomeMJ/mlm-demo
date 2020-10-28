import request from '@/utils/request'

export function getDevelopRecord() {
  return request({
    url: '/develop-record',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

