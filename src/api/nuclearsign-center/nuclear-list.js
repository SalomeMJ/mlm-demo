import request from '@/utils/request'

export function getNuclearList() {
  return request({
    url: '/nuclear-list',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

