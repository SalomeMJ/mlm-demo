import request from '@/utils/request'

export function getValidationScore() {
  return request({
    url: '/validation-score',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

