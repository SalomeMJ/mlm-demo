import request from '@/utils/request'

export function getUnivariate() {
  return request({
    url: '/monitor/univariate',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
