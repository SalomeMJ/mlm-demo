import request from '@/utils/request'

export function getProjectLibrary() {
  return request({
    url: '/project-library',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

