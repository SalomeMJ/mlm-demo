const warningRule = {
  status: 200,
  message: 'success',
  data: {
    'ruleList|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'ruleNo|+1': ['R2010090001', 'R2010110001', 'R2010090003', 'R2010090008', 'R2009090001', 'R2009090002', 'R2009090003', 'R2009090010', 'R2008090001', 'R2008120001', 'R2010120001'],
        'ruleName|+1': ['Trigger_11', 'Trigger_10', 'Trigger_9', 'Trigger_8', 'Trigger_7', 'Trigger_6', 'Trigger_5', 'Trigger_4', 'Trigger_3', 'Trigger_2', 'Trigger_1'],
        'detectionRuleName|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0'],
        'modelName|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0'],
        'status|+1': ['配置中', '生效审核中', '生效中', '配置中', '配置中', '配置中', '生效中', '生效中', '生效中', '生效中', '生效中'],
        'effectTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24', '2020.03.20-17:56:03', '2019.03.12-14:42:59', '2019.02.22-09:23:11', '2019.01.15-12:13:33', '2018.12.27-11:32:43', '2018.12.12-20:11:04', '2018.12.06-18:32:34']
      }
    ]
  }
}
export default {
  url: '/warning-rule',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: warningRule
    }
  }
}
