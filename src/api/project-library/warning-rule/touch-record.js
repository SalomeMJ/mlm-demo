import request from '@/utils/request'

export function getTouchRecord() {
  return request({
    url: '/touch-record',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

