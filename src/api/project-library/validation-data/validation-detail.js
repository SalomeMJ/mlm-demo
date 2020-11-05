import request from '@/utils/request'

export function getValidationDetail() {
  return request({
    url: '/validation-detail',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

