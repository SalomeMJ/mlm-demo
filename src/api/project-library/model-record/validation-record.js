import request from '@/utils/request'

export function getValidationRecord() {
  return request({
    url: '/validation-record',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

