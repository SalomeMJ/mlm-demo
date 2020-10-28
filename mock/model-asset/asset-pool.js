const assetPool = {
  status: 200,
  message: 'success',
  data: {
    'assetPool|11': [
      {
        'id|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'modelNo|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'modelName|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'updateTime|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'modelGroup|+1': ['MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813', 'MTS2813'],
        'validationEventNum|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        'useEventNum|+1': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    ]
  }
}
export default {
  url: '/asset-pool',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: assetPool
    }
  }
}
