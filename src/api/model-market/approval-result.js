import request from '@/utils/request'

export function getApprovalResult() {
  return request({
    url: '/monitor/approval-result',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
