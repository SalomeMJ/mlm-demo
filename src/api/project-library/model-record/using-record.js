import request from '@/utils/request'

export function getUsingRecord() {
  return request({
    url: '/using-record',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

