import request from '@/utils/request'

export function getCutOffgood() {
  return request({
    url: '/monitor/cutoff-good',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
