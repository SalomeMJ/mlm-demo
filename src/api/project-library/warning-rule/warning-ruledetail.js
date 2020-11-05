import request from '@/utils/request'

export function getWarningRuleDetail() {
  return request({
    url: '/warning-rule-detail',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

