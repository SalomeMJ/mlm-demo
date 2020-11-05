import request from '@/utils/request'

export function getDataSample() {
  return request({
    url: '/monitor/data-sample',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
