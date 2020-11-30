import request from '@/utils/request'

export function getModelDocument() {
  return request({
    url: '/model-document',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
