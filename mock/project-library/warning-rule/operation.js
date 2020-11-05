const operation = {
  status: 200,
  message: 'success',
  data: {
    'results': [
      {
        'id': 207,
        'modelType': 'MonitorEarlyWarningRule',
        'method': 'create',
        'modelId': '6',
        'params': '[{"id":null,"creator":"李国桥","createTime":null,"updater":"李国桥","updateTime":null,"name":"343","level":"SERIOUS","executeCycle":"DAY","executeCycleCoef":1,"firstExecuteTime":"2019-12-13 16:52:00","personnel":"215,228","message":"123","loanTypeId":1,"targetId":28,"gradeType":"RULE_SET","logicalSymbol":"GREATER_THAN","value":10.0,"moduleId":8,"enabled":true,"version":null,"delayQueueJobId":null}]',
        'ret': '{"warningRule":{"id":6,"creator":"李国桥","createTime":null,"updater":"李国桥","updateTime":null,"name":"343","level":"SERIOUS","executeCycle":"DAY","executeCycleCoef":1,"firstExecuteTime":"2019-12-13 16:52:00","personnel":"215,228","message":"123","loanTypeId":1,"targetId":28,"gradeType":"RULE_SET","logicalSymbol":"GREATER_THAN","value":10.0,"moduleId":8,"enabled":true,"version":1,"delayQueueJobId":null},"baseInfo":["新建预警名称为：343","新建预警等级为：严重","新建执行周期为：1:天","选择开始执行时间为：2019.12.13-16:52:00","新建预警人员为：路飞;乔巴;","新建预警提醒为：123"]}',
        'process': '新增预警规则',
        'memo': '',
        'operator': '李国桥',
        'logTime': '2019-12-13 16:51:01 +0800'
      }
    ]
  }
}
export default {
  url: '/operation',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: operation
    }
  }
}
