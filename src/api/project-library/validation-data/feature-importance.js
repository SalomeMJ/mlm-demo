import request from '@/utils/request'

export function getFeatureImportance() {
  return request({
    url: '/monitor/feature-importance',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
