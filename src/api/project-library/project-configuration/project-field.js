import request from '@/utils/request'

export function getProjectField() {
  return request({
    url: '/project-configuration/project-field',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

