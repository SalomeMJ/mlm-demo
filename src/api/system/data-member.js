import request from '@/utils/request'

export function getDataMember() {
  return request({
    url: '/system/data-member',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
