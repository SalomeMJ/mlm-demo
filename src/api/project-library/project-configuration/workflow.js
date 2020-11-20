import request from '@/utils/request'

export function getWorkfow() {
  return request({
    url: '/project-configuration/workflow',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

