import request from '@/utils/request'

export function getApprovalMatch() {
  return request({
    url: '/monitor/approval-match',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
