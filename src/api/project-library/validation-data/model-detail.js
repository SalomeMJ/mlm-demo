import request from '@/utils/request'

export function getModelDetail() {
  return request({
    url: '/monitor/model-detail',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
