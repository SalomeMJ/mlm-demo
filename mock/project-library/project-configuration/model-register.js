const modelRegister = {
  status: 200,
  message: 'success',
  data: {
    'modelRegister|3': [
      {
        'id|+1': [1, 2, 3],
        'modelName|+1': ['模板一号', '模板二号', '模板三号'],
        'modelDesc|+1': ['当前业务应用模板', '-', '-'],
        'operator|+1': ['黎簇', '王盟', '王盟'],
        'enable|+1': [true, false, false]
      }
    ]
  }
}
export default {
  url: '/project-configuration/modelRegister',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: modelRegister
    }
  }
}
