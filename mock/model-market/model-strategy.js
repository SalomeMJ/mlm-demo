const strategyList = {
  status: 200,
  message: 'success',
  data: {
    'strategylist|3': [
      {
        'value|+1': [1, 2, 3],
        'label|+1': ['二手车审批策略', '二自营车审批策略', '新车审批策略']
      }
    ],
    'modellist|3': [
      {
        'value|+1': [1, 2, 3],
        'label|+1': ['消费贷A卡模型', '车贷二手车 XGB', '易速贷 A卡']
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
