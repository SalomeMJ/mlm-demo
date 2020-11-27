const modelTrace = {
  status: 200,
  message: 'success',
  data: {
    'warningRuleTouch': [
      { name: '轻微', value: 29 },
      { name: '一般', value: 17 },
      { name: '严重', value: 64 }
    ],
    'useEventStatus': [
      { name: '配置中', value: 12 },
      { name: '生效审核中', value: 5 },
      { name: '已生效', value: 20 },
      { name: '停用审核中', value: 4 },
      { name: '已停用', value: 10 }
    ],
    'psi': [0.0021, 0.0048, 0.0841, 0.1419, 0.0496, 0.0105]
  }
}
export default {
  url: '/monitor/model-market/model-trace',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: modelTrace
    }
  }
}
