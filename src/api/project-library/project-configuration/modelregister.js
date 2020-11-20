import request from '@/utils/request'

export function getModelRegister() {
  return request({
    url: '/project-configuration/modelRegister',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

