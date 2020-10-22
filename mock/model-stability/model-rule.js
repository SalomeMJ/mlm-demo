const dataList = {
  status: 200,
  message: 'success',
  data: {
    'modelRule|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'name|+1': ['Trigger_strategy_2_Model_PSI', 'Trigger_tactics_003_model_PSI', 'Trigger_tactics_001_model_PSI', 'Trigger_tactics_003_ruleset_B', 'Trigger_tactics_003_ruleset_A', 'Trigger_tactics_003_model_AVG', 'Trigger_tactics_003_model_A', 'Trigger_tactics_001_model_C', 'Trigger_tactics_001_ruleset_B', 'Trigger_Tactics_001_rule', 'Trigger_strategy_2_Model'],
        'operateTime|+1': [0, 2, 2, 5, 6, 6, 6, 6, 6, 6],
        'touchTime|+1': [0, 2, 2, 5, 6, 6, 6, 6, 6, 6],
        'level|+1': ['一般', '严重', '一般', '轻微', '一般', '一般', '一般', '轻微', '一般', '严重'],
        'runTime|+1': ['1天', '1天', '1天', '1天', '1天', '1天', '1天', '1天', '1天', '1天'],
        'operator|+1': ['郭昕', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜', '李泽瑜'],
        'updateTime|+1': ['2020-01-07 15:27:20', '2020-01-06 17:54:07', '2020-01-06 17:54:06', '2020-01-06 17:53:58', '2020-01-06 17:29:32', '2020-01-07 15:27:20', '2020-01-06 17:54:07', '2020-01-06 17:54:06', '2020-01-06 17:53:58', '2020-01-06 17:29:32'],
        'levoperateel|+1': [
          { 'invalid': false, 'enabled': true },
          { 'invalid': false, 'enabled': true },
          { 'invalid': true, 'enabled': true },
          { 'invalid': true, 'enabled': false },
          { 'invalid': true, 'enabled': false },
          { 'invalid': false, 'enabled': false },
          { 'invalid': false, 'enabled': true },
          { 'invalid': false, 'enabled': true },
          { 'invalid': false, 'enabled': true },
          { 'invalid': false, 'enabled': true }
        ]
      }
    ]
  }
}

export default {
  url: '/monitor/model-rule',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: dataList
    }
  }
}
