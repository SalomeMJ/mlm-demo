import request from '@/utils/request'

export function getWarningRule() {
  return request({
    url: '/warning-rule',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

