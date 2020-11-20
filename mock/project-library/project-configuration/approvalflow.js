const approvalflow = {
  status: 200,
  message: 'success',
  data: {
    'approvalflow|3': [
      {
        'id|+1': [1, 2, 3],
        'approvalName|+1': ['审批流一号', '审批流二号', '审批流三号'],
        'approvalDesc|+1': ['当前业务应用审批流', '-', '-'],
        'operator|+1': ['黎簇', '王盟', '王盟'],
        'updateTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45']
      }
    ]
  }
}
export default {
  url: '/project-configuration/approvalflow',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: approvalflow
    }
  }
}
