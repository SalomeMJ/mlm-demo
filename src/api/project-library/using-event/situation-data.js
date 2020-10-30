import request from '@/utils/request'

export function getSituation() {
  return request({
    url: '/event-situation',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

