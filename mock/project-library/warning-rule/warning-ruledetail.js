const warningRuledetail = {
  status: 200,
  message: 'success',
  data: {
    'results': {
      'id': null,
      'ruleId': null,
      'loanTypeId': null,
      'ruleName': null,
      'ruleLevel': null,
      'ruleMessage': null,
      'ruleCycle': null,
      'ruleCycleCoef': 0,
      'ruleModuleIsEffect': false,
      'executeTime': null,
      'executeResult': 0,
      'isTrigger': false,
      'personnel': null,
      'createTime': null,
      'ruleLevelName': null,
      'ruleCycleName': null,
      'gradeTypeName': '上海地区申请单通过率',
      'triggeNumber': 0,
      'runCounts': 10,
      'value': 10,
      'rulePerformanceList': [
        {
          'executeTime': '2019.12.13-16:52:00',
          'executeResult': 10
        }, {
          'executeTime': '2019.12.14-16:52:00',
          'executeResult': 11
        }, {
          'executeTime': '2019.12.15-16:52:00',
          'executeResult': 8
        }, {
          'executeTime': '2019.12.16-16:52:00',
          'executeResult': 7
        }, {
          'executeTime': '2019.12.17-16:52:00',
          'executeResult': 12
        }, {
          'executeTime': '2019.12.18-16:52:00',
          'executeResult': 5
        }, {
          'executeTime': '2019.12.19-16:52:00',
          'executeResult': 4
        }, {
          'executeTime': '2019.12.20-16:52:00',
          'executeResult': 14
        }, {
          'executeTime': '2019.12.21-16:52:00',
          'executeResult': 2
        }, {
          'executeTime': '2019.12.21-16:52:00',
          'executeResult': 13
        }
      ],
      'startDate': null,
      'endDate': null,
      'gradeType': null,
      'personnelInfoList': null,
      'rule': null
    }
  }
}
export default {
  url: '/warning-rule-detail',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: warningRuledetail
    }
  }
}
