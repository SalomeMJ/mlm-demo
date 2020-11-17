import request from '@/utils/request'

export function getModelStrategy() {
  return request({
    url: '/monitor/model-strategy',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
