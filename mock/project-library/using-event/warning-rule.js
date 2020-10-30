const warningRule = {
  status: 200,
  message: 'success',
  data: {
    'warningRule|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'warningName|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'runTimes|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'touchTimes|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'warningLevel|+1': ['一般', '轻微', '一般', '一般', '一般', '一般', '轻微', '轻微', '轻微', '轻微', '轻微'],
        'runRange|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'operator|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'updateTime|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  }
}
export default {
  url: '/event-warning',
  type: 'get',
  response: response => {
    console.log(response)
    return {
      code: 200,
      data: warningRule
    }
  }
}
