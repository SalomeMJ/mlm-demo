import request from '@/utils/request'

export function getDatesetDetail() {
  return request({
    url: '/monitor/dataset-detail',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
