import request from '@/utils/request'

export function getModelResult() {
  return request({
    url: '/monitor/model-result',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
