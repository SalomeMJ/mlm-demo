const projectDetail = {
  status: 200,
  message: 'success',
  data: {
    'assetPool|11': [
      {
        'evenNo|+1': ['U2010090001', 'U2010110001', 'U2010090003', 'U2010090008', 'U2009090001', 'U2009090002', 'U2009090003', 'U2009090010', 'U2008090001', 'U2008120001', 'U2010120001'],
        'evenName|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0'],
        'head|+1': ['黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇', '黎簇'],
        'checker|+1': ['王盟', '田雨', '于和伟', '王盟', '王盟', '田雨', '于和伟', '王盟', '田雨', '于和伟', '王盟'],
        'status|+1': ['配置中', '生效审核中', '生效中', '配置中', '配置中', '配置中', '生效中', '生效中', '生效中', '生效中', '生效中'],
        'updateTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24', '2020.03.20-17:56:03', '2019.03.12-14:42:59', '2019.02.22-09:23:11', '2019.01.15-12:13:33', '2018.12.27-11:32:43', '2018.12.12-20:11:04', '2018.12.06-18:32:34']
      }
    ]
  }
}
export default {
  url: '/using-record',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: projectDetail
    }
  }
}
