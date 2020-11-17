import request from '@/utils/request'

export function getFeatureAnalysis() {
  return request({
    url: '/monitor/feature-analysis',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
