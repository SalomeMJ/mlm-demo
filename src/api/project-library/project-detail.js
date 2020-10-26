import request from '@/utils/request'

export function getProjectDetail() {
  return request({
    url: '/project-detail',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

