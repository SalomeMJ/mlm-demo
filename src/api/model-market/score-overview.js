import request from '@/utils/request'

export function getScoreOverview() {
  return request({
    url: '/monitor/score-overview',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
