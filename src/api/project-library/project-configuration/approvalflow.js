import request from '@/utils/request'

export function getApprovalfow() {
  return request({
    url: '/project-configuration/approvalflow',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

