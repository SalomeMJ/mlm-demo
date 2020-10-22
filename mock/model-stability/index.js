const dataList = {
  status: 200,
  message: 'success',
  data: {
    'scoreDistributionChart|5': [
      {
        'range|+1': ['(~,500]', '(500,510]', '(510,520]', '(520,530]', '(530,540]'],
        'countNum|+1': [5, 7, 23, 44, 94],
        'radio|+1': ['0.06%', '0.09%', '0.29%', '0.56%', '1.20%']
      }
    ]
  }
}

export default {
  url: '/monitor/model-stability',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: dataList
    }
  }
}
