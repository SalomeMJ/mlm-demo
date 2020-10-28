const projectDetail = {
  status: 200,
  message: 'success',
  data: {
    'assetPool|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'evenNo|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'evenName|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'head|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'checker|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'status|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'updateTime|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  }
}
export default {
  url: '/using-record',
  type: 'get',
  response: response => {
    console.log(response)
    return {
      code: 200,
      data: projectDetail
    }
  }
}
