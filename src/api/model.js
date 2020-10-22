import request from '@/utils/request'
// import qs from 'qs'
// 模型监控查询模型list
export function findAllModel() {
  return request({
    url: '/general/model/findAllOnlineAndOffline',
    method: 'get',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
// 模型数据展示可选时间范围，及初始值,参数modelCode,id
export function getExtremeTime(data) {
  return request({
    url: '/general/modelMonitor/getExtremeTime',
    method: 'get',
    params: data
  })
}
// 模型被请求次数，响应时间，请求成功率等,参数modelCode,id
export function requestBasicInfos(data) {
  return request({
    url: '/general/modelMonitor/calculationRequestBasicInfos',
    method: 'get',
    params: data
  })
}
// 模型监控，切换时间，echats图改变 modelCode id minTime maxTime
export function calculationByTypeAndTime(data) {
  return request({
    url: '/general/modelMonitor/calculationByTypeAndTime',
    method: 'post',
    data: data
  })
}
// 模型应用页，查询模型列表
export function findModelList() {
  return request({
    url: '/general/model/onlineModelList',
    method: 'get'
  })
}
// 模型应用页，查询模型详情
export function findModeldetail(data) {
  return request({
    url: '/general/model/modelDetail',
    method: 'get',
    params: { id: data.id }
  })
}
// 模型详情，查询预测结果modelCode endDate startDate start limit sortProperty sortDirection searchText
export function predictOutcome(data) {
  return request({
    url: '/general/applicationTask/predict',
    method: 'get',
    params: data
  })
}
// 模型详情，查询预测结果默认时间可选范围
export function predictOutcomeTime(data) {
  return request({
    url: '/general/applicationTask/getTime',
    method: 'get',
    params: { modelCode: data }
  })
}
