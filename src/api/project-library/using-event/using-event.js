import request from '@/utils/request'

export function getUsingEvent() {
  return request({
    url: '/using-event',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

