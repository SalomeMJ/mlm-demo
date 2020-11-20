const workflow = {
  status: 200,
  message: 'success',
  data: {
    'workflow|3': [
      {
        'id|+1': [1, 2, 3],
        'workflowName|+1': ['工作流一号', '工作流二号', '工作流三号'],
        'workflowDesc|+1': ['当前业务应用工作流', '-', '-'],
        'operator|+1': ['黎簇', '王盟', '王盟'],
        'enable|+1': [true, false, false]
      }
    ]
  }
}
export default {
  url: '/project-configuration/workflow',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: workflow
    }
  }
}
