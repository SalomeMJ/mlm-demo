const strategyList = {
  status: 200,
  message: 'success',
  data: {
    'projectlist|6': [
      {
        'value|+1': [1, 2, 3, 4, 5, 6],
        'label|+1': ['全部项目', '新车预审批', '二手车预审批', '自营车预审批', '小额信贷审批', '消费贷款审批'
        ]
      }
    ],
    'strategylist|3': [
      {
        'value|+1': [1, 2, 3],
        'label|+1': ['二手车审批策略', '二自营车审批策略', '新车审批策略']
      }
    ],
    'modellist|11': [
      {
        'value|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'label|+1': ['易速贷申请', '自营车审批', '新车审批', '二手车预审批', '易速贷反欺诈', '易速贷反欺诈2.0', '自营车预审批', '新车预审批', '新车催收', '二手车审批', '二手车审批2.0']
      }
    ],
    'modelRuleSet|3': [
      {
        'value|+1': [1, 2, 3],
        'label|+1': ['姓名真实性检查', '居住地真实性检查', '身份证号真实性检查']
      }
    ],
    'particlelist|3': [
      {
        'value|+1': [1, 2, 3],
        'label|+1': ['天', '周', '月']
      }
    ]
  }
}

export default {
  url: '/monitor/model-strategy',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: strategyList
    }
  }
}
