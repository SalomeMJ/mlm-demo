import request from '@/utils/request'

export function getAssetPool() {
  return request({
    url: '/asset-pool',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}

