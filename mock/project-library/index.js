const projectLibrary = {
  status: 200,
  message: 'success',
  data: {
    'projectList|5': [
      {
        'projectId|+1': [1, 2, 3, 4, 5],
        'projectName|+1': ['新车预审批', '二手车审批', '自营车审批', '小额信贷审批', '消费贷款审批'],
        'projectPrimary|+1': [true, true, false, true, false],
        'projectDesc|+1': ['用于新车贷款申请', '用于二手车贷款申请', '用于自营车贷款申请', '用于小额贷款申请', '用于消费贷款申请'],
        'projectNum|+1': [8, 4, 11, 12, 6],
        'memberNum|+1': [11, 12, 11, 6, 8],
        'creatTime|+1': ['2020.06.28-11:20:03', '2020.06.25-13:56:03', '2020.06.20-13:20:45', '2020.05.31-16:30:24', '2020.03.20-17:56:03']
      }
    ]
  }
}
export default {
  url: '/project-library',
  type: 'get',
  response: response => {
    return {
      code: 200,
      data: projectLibrary
    }
  }
}
