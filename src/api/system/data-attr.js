import request from '@/utils/request'

export function getDataAttr() {
  return request({
    url: '/system/data-attr',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
