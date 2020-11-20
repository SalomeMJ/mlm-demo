const projectField = {
  status: 200,
  message: 'success',
  data: {
    'projectField|3': [
      {
        'id|+1': [1, 2, 3],
        'fieldName|+1': ['算法类型', '模型注册渠道', '模型风险等级'],
        'fieldType|+1': ['下拉框', '下拉框', '下拉框'],
        'operator|+1': ['黎簇', '王盟', '王盟'],
        'mandatory|+1': [true, false, true]
      }
    ]
  }
}
export default {
  url: '/project-configuration/project-field',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: projectField
    }
  }
}
