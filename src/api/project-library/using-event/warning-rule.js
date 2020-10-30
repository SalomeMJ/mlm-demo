import request from '@/utils/request'

export function getEventWarning() {
  return request({
    url: '/event-warning',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

