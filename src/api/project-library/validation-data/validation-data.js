import request from '@/utils/request'

export function getValidationData() {
  return request({
    url: '/validation-data',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

