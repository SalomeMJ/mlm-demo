import request from '@/utils/request'

export function getCutOffbad() {
  return request({
    url: '/monitor/cutoff-bad',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
