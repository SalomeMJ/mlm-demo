const validationData = {
  status: 200,
  message: 'success',
  data: {
    'validationDatas|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'validationNo|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'validationName|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'timeRange|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'totalCustomerNum|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'goodCustomerNum|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'badCustomerNum|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'rate|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'refuseCustomerNum|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  }
}
export default {
  url: '/validation-data',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: validationData
    }
  }
}
