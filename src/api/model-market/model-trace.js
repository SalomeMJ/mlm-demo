import request from '@/utils/request'

export function getModelTrace() {
  return request({
    url: '/monitor/model-market/model-trace',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
